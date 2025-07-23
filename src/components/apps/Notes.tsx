import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Save, Trash2, Edit3, FileText } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingContent, setEditingContent] = useState('');
  const [editingTitle, setEditingTitle] = useState('');

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('rishabh-os-notes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt)
      }));
      setNotes(parsedNotes);
    } else {
      // Create some default notes
      const defaultNotes: Note[] = [
        {
          id: '1',
          title: 'Welcome to Notes',
          content: `# Welcome to RishabhOS Notes!

This is a simple note-taking app built with React and TypeScript.

## Features:
- **Markdown support** for rich text formatting
- **Auto-save** to localStorage
- **Search functionality** 
- **Clean, modern interface**

Feel free to create, edit, and organize your thoughts here!

---

## About the Developer
This app is part of RishabhOS - a virtual operating system portfolio by Rishabh Gupta.

**Tech Stack:**
- React.js
- TypeScript  
- Tailwind CSS
- Framer Motion

Happy note-taking! 📝`,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          title: 'Project Ideas',
          content: `# Project Ideas for 2025

## Web Development
- [ ] Real-time collaboration tool
- [ ] AI-powered code reviewer
- [ ] Virtual reality web experience
- [ ] Progressive Web App for productivity

## Mobile Development  
- [ ] React Native expense tracker
- [ ] Cross-platform meditation app
- [ ] Augmented reality learning tool

## AI/ML Projects
- [ ] Natural language SQL generator
- [ ] Image recognition for accessibility
- [ ] Personalized learning assistant
- [ ] Predictive analytics dashboard

---

*Ideas are worthless without execution. Start with one and ship it!* 🚀`,
          createdAt: new Date(Date.now() - 86400000), // 1 day ago
          updatedAt: new Date(Date.now() - 3600000) // 1 hour ago
        }
      ];
      setNotes(defaultNotes);
      localStorage.setItem('rishabh-os-notes', JSON.stringify(defaultNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('rishabh-os-notes', JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setIsEditing(true);
    setEditingTitle(newNote.title);
    setEditingContent(newNote.content);
  };

  const deleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
      setIsEditing(false);
    }
  };

  const startEditing = (note: Note) => {
    setSelectedNote(note);
    setIsEditing(true);
    setEditingTitle(note.title);
    setEditingContent(note.content);
  };

  const saveNote = () => {
    if (!selectedNote) return;

    const updatedNote = {
      ...selectedNote,
      title: editingTitle || 'Untitled Note',
      content: editingContent,
      updatedAt: new Date()
    };

    setNotes(notes.map(note => 
      note.id === selectedNote.id ? updatedNote : note
    ));
    setSelectedNote(updatedNote);
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditingTitle(selectedNote?.title || '');
    setEditingContent(selectedNote?.content || '');
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="h-full bg-background flex">
      {/* Sidebar */}
      <div className="w-80 border-r border-border bg-card flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Notes</h2>
            <button
              onClick={createNewNote}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-muted rounded-lg border-0 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-auto">
          <AnimatePresence>
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                  selectedNote?.id === note.id ? 'bg-muted' : ''
                }`}
                onClick={() => {
                  setSelectedNote(note);
                  setIsEditing(false);
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{note.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {note.content.slice(0, 100)}...
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {formatDate(note.updatedAt)}
                    </p>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNote(note.id);
                    }}
                    className="p-1 hover:bg-destructive/20 hover:text-destructive rounded transition-colors ml-2"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredNotes.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No notes found</p>
              <p className="text-sm">Create your first note to get started</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {selectedNote ? (
          <>
            {/* Note Header */}
            <div className="p-4 border-b border-border bg-card flex items-center justify-between">
              {isEditing ? (
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  className="text-lg font-bold bg-transparent border-b border-muted-foreground/30 outline-none focus:border-primary"
                  placeholder="Note title..."
                />
              ) : (
                <h1 className="text-lg font-bold">{selectedNote.title}</h1>
              )}
              
              <div className="flex items-center space-x-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={saveNote}
                      className="flex items-center space-x-1 px-3 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="px-3 py-1 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => startEditing(selectedNote)}
                    className="flex items-center space-x-1 px-3 py-1 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                )}
              </div>
            </div>

            {/* Note Content */}
            <div className="flex-1 p-4">
              {isEditing ? (
                <textarea
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  placeholder="Start writing your note..."
                  className="w-full h-full resize-none bg-transparent outline-none text-sm leading-relaxed"
                />
              ) : (
                <div className="h-full overflow-auto">
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">
                    {selectedNote.content}
                  </pre>
                </div>
              )}
            </div>

            {/* Note Footer */}
            <div className="p-4 border-t border-border bg-card text-xs text-muted-foreground">
              Created: {selectedNote.createdAt.toLocaleString()} • 
              Last modified: {selectedNote.updatedAt.toLocaleString()}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No note selected</h3>
              <p>Choose a note from the sidebar or create a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { 
  LayoutDashboard, Briefcase, CheckSquare, Kanban, Calendar, 
  Users, BarChart3, Bell, Settings, Sun, Moon, Search, 
  Plus, X, Paperclip, Clock, ChevronDown, Flag, Tag, 
  Eye, MessageSquare, History, PlayCircle, PlusCircle, Trash2
} from 'lucide-react';

const TaskManagementApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [subtasks, setSubtasks] = useState([{ id: 1, text: '', completed: false }]);

  // Theme Toggle
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Subtask logic
  const addSubtask = () => {
    setSubtasks([...subtasks, { id: Date.now(), text: '', completed: false }]);
  };

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} font-sans transition-colors duration-300`}>
      
      {/* SIDEBAR */}
      <aside className={`w-64 border-r ${isDarkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white'} backdrop-blur-md hidden lg:flex flex-col sticky top-0 h-screen`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>
          <span className="text-xl font-bold tracking-tight">TMS Pro</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: LayoutDashboard, label: 'Dashboard' },
            { icon: Briefcase, label: 'Projects' },
            { icon: CheckSquare, label: 'Tasks', active: true },
            { icon: Kanban, label: 'Kanban Board' },
            { icon: Calendar, label: 'Calendar' },
            { icon: Users, label: 'Team' },
            { icon: BarChart3, label: 'Reports' },
          ].map((item) => (
            <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'hover:bg-indigo-50/50 dark:hover:bg-slate-800'}`}>
              <item.icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t dark:border-slate-800 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"><Bell size={20} /> <span className="text-sm">Notifications</span></button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"><Settings size={20} /> <span className="text-sm">Settings</span></button>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* NAVBAR */}
        <header className={`h-16 flex items-center justify-between px-8 border-b ${isDarkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white/80'} backdrop-blur-md z-10`}>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className={`w-full pl-10 pr-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-100 border-transparent'}`}
            />
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2" />
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">Aman Kumar</p>
                <p className="text-xs text-slate-400">Product Manager</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Aman+Kumar&background=6366f1&color=fff" className="w-9 h-9 rounded-full ring-2 ring-indigo-500/20" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Active Tasks</h1>
              <p className="text-slate-500 text-sm">Managing 12 active tasks in "TMS Project"</p>
            </div>
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/25 active:scale-95"
            >
              <Plus size={20} /> Create Task
            </button>
          </div>

          {/* DUMMY TASKS (SKELETON/PREVIEW) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className={`p-6 rounded-2xl border ${isDarkMode ? 'border-slate-800 bg-slate-800/40' : 'bg-white border-slate-100 shadow-sm'} group hover:shadow-md transition-all`}>
                <div className="flex justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">Development</span>
                  <div className="flex -space-x-2">
                    <img className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" src="https://i.pravatar.cc/100?u=1" alt="u1" />
                    <img className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" src="https://i.pravatar.cc/100?u=2" alt="u2" />
                  </div>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-indigo-600 transition-colors tracking-tight">Setup JWT Authentication for API</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">Ensure secure login and role-based access control using modern JWT standards.</p>
                <div className="flex items-center justify-between text-xs font-medium border-t dark:border-slate-700 pt-4">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={14} /> 24 May, 2026
                  </div>
                  <div className="flex items-center gap-2 text-red-500">
                    <Flag size={14} /> Urgent
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TASK CREATE DRAWER (SLIDE-OVER) */}
        <div className={`fixed inset-y-0 right-0 w-full max-w-2xl z-50 transform transition-transform duration-500 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className={`h-full shadow-2xl flex flex-col ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
            
            {/* Header */}
            <div className="p-6 border-b dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg text-indigo-600">
                  <CheckSquare size={20} />
                </div>
                <h2 className="text-xl font-bold">New Task</h2>
              </div>
              <button onClick={() => setIsDrawerOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><X size={24} /></button>
            </div>

            {/* Form Scroll Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              
              {/* Basic Details */}
              <section className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Title & Description</label>
                  <input type="text" placeholder="Task Name..." className={`w-full text-xl font-bold bg-transparent focus:outline-none placeholder:text-slate-300 dark:placeholder:text-slate-600`} />
                </div>
                <div className={`p-4 rounded-xl border ${isDarkMode ? 'border-slate-800 bg-slate-800/50' : 'border-slate-200 bg-slate-50'}`}>
                  <textarea placeholder="Write a detailed task description..." className="w-full bg-transparent border-none focus:outline-none text-sm min-h-[120px] resize-none" />
                  <div className="flex gap-4 mt-2 border-t dark:border-slate-700 pt-3">
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors"><Paperclip size={18}/></button>
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors font-bold text-sm italic underline">B I U</button>
                  </div>
                </div>
              </section>

              {/* Attributes Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Assignee</label>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    <img src="https://i.pravatar.cc/100?u=4" className="w-6 h-6 rounded-full" alt="u" />
                    <select className="bg-transparent text-sm w-full outline-none">
                      <option>Select User</option>
                      <option>Rahul Gupta</option>
                      <option>Riya Singh</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Status</label>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    <select className="bg-transparent text-sm w-full outline-none">
                      <option>To Do</option>
                      <option>In Progress</option>
                      <option>Review</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Priority & Timeline */}
              <div className="grid grid-cols-3 gap-4">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Priority</label>
                    <select className={`w-full p-3 rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} bg-transparent text-sm`}>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Due Date</label>
                    <input type="date" className={`w-full p-2.5 rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} bg-transparent text-sm`} />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Estimate</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-slate-400" size={16} />
                      <input type="text" placeholder="2h 30m" className={`w-full pl-10 p-2.5 rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} bg-transparent text-sm`} />
                    </div>
                 </div>
              </div>

              {/* Subtasks */}
              <section className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subtasks (Checklist)</label>
                  <span className="text-xs text-indigo-600 font-bold">2/4 Done</span>
                </div>
                <div className="space-y-2">
                  {subtasks.map((st) => (
                    <div key={st.id} className="flex items-center gap-3 group">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                      <input type="text" placeholder="Add subtask..." className="bg-transparent text-sm flex-1 focus:outline-none py-1 border-b border-transparent focus:border-slate-200" />
                      <button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500"><Trash2 size={16}/></button>
                    </div>
                  ))}
                  <button onClick={addSubtask} className="flex items-center gap-2 text-indigo-600 text-sm font-bold mt-2 hover:underline">
                    <PlusCircle size={18} /> Add Subtask
                  </button>
                </div>
              </section>

              {/* Drag & Drop File Upload */}
              <section className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Attachments</label>
                <div className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-colors ${isDarkMode ? 'border-slate-800 hover:bg-slate-800/40' : 'border-slate-200 hover:bg-slate-50'}`}>
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                    <Paperclip size={24} />
                  </div>
                  <p className="text-sm font-medium">Click or drag files to upload</p>
                  <p className="text-xs text-slate-400 mt-1">Images, PDF, DOCX up to 10MB</p>
                </div>
              </section>

              {/* More Options (Simplified) */}
              <div className="grid grid-cols-2 gap-6 pb-20">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-600 flex items-center gap-2">API <X size={12}/></span>
                    <button className="p-1 px-3 border border-dashed border-slate-300 rounded-lg text-xs text-slate-400 hover:border-indigo-500 hover:text-indigo-500">+ Tag</button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Visibility</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="radio" name="vis" checked /> Team</label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="radio" name="vis" /> Private</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Footer Actions */}
            <div className={`p-6 border-t ${isDarkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'} flex items-center justify-between gap-4 mt-auto`}>
              <button className="text-slate-400 hover:text-slate-600 font-bold text-sm px-4">Save as Draft</button>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold border ${isDarkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'}`}
                >
                  Cancel
                </button>
                <button className="px-8 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-500/30">
                  Create Task
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div 
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-40 transition-opacity"
          />
        )}

      </main>
    </div>
  );
};

export default TaskManagementApp;
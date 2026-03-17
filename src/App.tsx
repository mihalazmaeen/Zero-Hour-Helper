/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Crosshair, 
  Keyboard, 
  Info, 
  ChevronRight, 
  Target, 
  Trophy,
  Menu,
  X
} from 'lucide-react';
import { HOTKEYS, ARMIES, PRO_TRICKS, MASTERCLASS } from './constants';

type Tab = 'hotkeys' | 'armies' | 'tricks' | 'masterclass';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('hotkeys');
  const [selectedArmy, setSelectedArmy] = useState(ARMIES[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex overflow-hidden relative">
      {/* Scanline effect */}
      <div className="scanline pointer-events-none" />

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-military-panel border-r border-military-border flex flex-col z-50 relative"
      >
        <div className="p-6 flex items-center justify-between border-b border-military-border">
          {isSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Shield className="text-military-accent w-6 h-6" />
              <span className="font-bold tracking-tighter text-lg">ZERO HOUR</span>
            </motion.div>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavButton 
            active={activeTab === 'hotkeys'} 
            onClick={() => setActiveTab('hotkeys')}
            icon={<Keyboard size={20} />}
            label="Hotkeys"
            collapsed={!isSidebarOpen}
          />
          <NavButton 
            active={activeTab === 'armies'} 
            onClick={() => setActiveTab('armies')}
            icon={<Target size={20} />}
            label="Armies"
            collapsed={!isSidebarOpen}
          />
          <NavButton 
            active={activeTab === 'tricks'} 
            onClick={() => setActiveTab('tricks')}
            icon={<Zap size={20} />}
            label="Pro Tactics"
            collapsed={!isSidebarOpen}
          />
          <NavButton 
            active={activeTab === 'masterclass'} 
            onClick={() => setActiveTab('masterclass')}
            icon={<Trophy size={20} />}
            label="Masterclass"
            collapsed={!isSidebarOpen}
          />
        </nav>

        <div className="p-4 border-t border-military-border">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center'}`}>
            <div className="w-8 h-8 rounded-full bg-military-accent flex items-center justify-center text-military-bg font-bold">
              G
            </div>
            {isSidebarOpen && (
              <div className="text-xs">
                <p className="font-bold">GENERAL STATUS</p>
                <p className="text-military-accent opacity-70 italic">READY FOR DEPLOYMENT</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-military-bg relative">
        <header className="sticky top-0 z-40 bg-military-bg/80 backdrop-blur-md border-b border-military-border p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-widest uppercase">
              {activeTab === 'hotkeys' && 'Tactical Hotkeys'}
              {activeTab === 'armies' && 'Army Intelligence'}
              {activeTab === 'tricks' && 'Advanced Maneuvers'}
              {activeTab === 'masterclass' && 'General Masterclass'}
            </h1>
            <div className="flex items-center gap-4 text-[10px] tracking-widest opacity-50">
              <span>ENCRYPTION: ACTIVE</span>
              <div className="w-2 h-2 rounded-full bg-military-accent animate-pulse" />
            </div>
          </div>
        </header>

        <div className="p-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'hotkeys' && (
              <motion.div
                key="hotkeys"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {HOTKEYS.map((group) => (
                  <div key={group.category} className="glass-panel overflow-hidden">
                    <div className="bg-white/5 p-4 border-b border-military-border">
                      <h2 className="text-sm font-bold tracking-widest uppercase text-military-accent">
                        {group.category}
                      </h2>
                    </div>
                    <div className="divide-y divide-military-border">
                      {group.keys.map((item) => (
                        <div key={item.key} className="p-4 flex items-center gap-6 hover:bg-white/5 transition-colors">
                          <div className="w-16 h-10 flex items-center justify-center bg-military-bg border border-military-accent/30 rounded text-military-accent font-bold shadow-inner">
                            {item.key}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{item.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'armies' && (
              <motion.div
                key="armies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="flex gap-4">
                  {ARMIES.map((army) => (
                    <button
                      key={army.name}
                      onClick={() => setSelectedArmy(army)}
                      className={`flex-1 p-4 border transition-all duration-300 ${
                        selectedArmy.name === army.name 
                          ? 'bg-military-accent text-military-bg border-military-accent' 
                          : 'border-military-border hover:border-military-accent/50'
                      }`}
                    >
                      <span className="font-bold tracking-widest uppercase">{army.name}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="glass-panel p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Info className="text-military-accent" size={20} />
                        <h3 className="font-bold uppercase tracking-widest text-sm">Army Profile</h3>
                      </div>
                      <p className="text-lg leading-relaxed opacity-90">{selectedArmy.description}</p>
                    </div>

                    <div className="glass-panel p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <Crosshair className="text-military-accent" size={20} />
                        <h3 className="font-bold uppercase tracking-widest text-sm">Combat Strategies</h3>
                      </div>
                      <div className="space-y-4">
                        {selectedArmy.strategies.map((strat, i) => (
                          <div key={i} className="flex gap-4 group">
                            <div className="text-military-accent font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                              0{i + 1}
                            </div>
                            <p className="text-sm leading-relaxed border-l border-military-border pl-4">
                              {strat}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="glass-panel p-6 border-l-4 border-l-military-accent">
                      <div className="flex items-center gap-3 mb-4">
                        <Trophy className="text-military-accent" size={20} />
                        <h3 className="font-bold uppercase tracking-widest text-sm">Pro Tip</h3>
                      </div>
                      <p className="text-sm italic opacity-80 leading-relaxed">
                        "{selectedArmy.proTips}"
                      </p>
                    </div>
                    
                    <div className="aspect-video bg-military-panel border border-military-border rounded-lg flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className={`w-full h-full opacity-20 ${
                        selectedArmy.color === 'blue' ? 'bg-blue-500' :
                        selectedArmy.color === 'red' ? 'bg-red-500' :
                        'bg-green-500'
                      }`} />
                      <p className="absolute text-[10px] tracking-widest font-bold uppercase">Satellite Feed Offline</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tricks' && (
              <motion.div
                key="tricks"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {PRO_TRICKS.map((trick) => (
                  <div key={trick.title} className="glass-panel p-6 hover:border-military-accent/50 transition-colors group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-military-accent tracking-widest uppercase">{trick.title}</h3>
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                    </div>
                    <p className="text-sm leading-relaxed opacity-80">
                      {trick.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'masterclass' && (
              <motion.div
                key="masterclass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {MASTERCLASS.map((section) => (
                  <div key={section.category} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-military-border" />
                      <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-military-accent whitespace-nowrap">
                        {section.category}
                      </h2>
                      <div className="h-px flex-1 bg-military-border" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {section.items.map((item) => (
                        <div key={item.title} className="glass-panel p-6 border-t-2 border-t-military-accent/30">
                          <h3 className="text-sm font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
                          <p className="text-xs leading-relaxed opacity-70 italic">
                            {item.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function NavButton({ 
  active, 
  onClick, 
  icon, 
  label, 
  collapsed 
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string;
  collapsed: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
        active 
          ? 'bg-military-accent text-military-bg shadow-lg shadow-military-accent/20' 
          : 'hover:bg-white/5 text-military-text/70 hover:text-military-text'
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      {!collapsed && (
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-bold uppercase tracking-widest"
        >
          {label}
        </motion.span>
      )}
    </button>
  );
}

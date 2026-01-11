import React, { useState, useEffect, useRef } from 'react';
import {
  Workflow,
  ShieldCheck,
  ChevronRight,
  Cpu,
  Target,
  Layers
} from 'lucide-react';

const Alix = () => {
  const [messages, setMessages] = useState([]);
  const scrollContainerRef = useRef(null);

  const chatScript = [
    { type: 'user', content: 'How does BiznorX help with hiring?' },
    {
      type: 'alix',
      content:
        'BiznorX aligns company requirements with verified candidate profiles using structured evaluation. This reduces manual screening and ensures each match reflects both role expectations and long-term business objectives.'
    },
    { type: 'user', content: 'Is this only for large companies?' },
    {
      type: 'alix',
      content:
        'BiznorX is designed for businesses at every stage. From early teams to established organizations, the system adapts matching logic based on scale, role complexity, and growth intent.'
    },
    { type: 'user', content: 'Can you guide me through the process?' },
    {
      type: 'alix',
      content:
        'The process is built around clarity. I analyze your requirements or profile, validate them against our professional network, and present aligned outcomes with clear reasoning.'
    },
    { type: 'user', content: 'How do professionals benefit from this?' },
    {
      type: 'alix',
      content:
        'Professionals gain access to opportunities that align with their skills and direction. Matches prioritize relevance and intent, not volume.'
    },
    { type: 'user', content: 'How do I start?' },
    {
      type: 'alix',
      content:
        'You can begin by submitting your CV or business profile. Once integrated, the system initiates structured analysis to identify meaningful alignments within the BiznorX ecosystem.'
    }
  ];

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  useEffect(() => {
    let currentIdx = 0;
    const timeouts = [];

    const displayNextMessage = () => {
      if (currentIdx < chatScript.length) {
        const msg = chatScript[currentIdx];
        const delay = currentIdx === 0 ? 800 : 1800;

        const timeout = setTimeout(() => {
          setMessages(prev => [...prev, { ...msg, displayedContent: '' }]);
          typeMessage(currentIdx, 0);
        }, delay);

        timeouts.push(timeout);
      }
    };

    const typeMessage = (msgIdx, charIdx) => {
      const fullContent = chatScript[msgIdx].content;

      if (charIdx <= fullContent.length) {
        setMessages(prev => {
          const updated = [...prev];
          updated[msgIdx].displayedContent = fullContent.substring(0, charIdx);
          return updated;
        });

        const speed = chatScript[msgIdx].type === 'user' ? 25 : 12;
        const timeout = setTimeout(
          () => typeMessage(msgIdx, charIdx + 1),
          speed
        );
        timeouts.push(timeout);
      } else {
        currentIdx++;
        displayNextMessage();
      }
    };

    displayNextMessage();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const capabilities = [
    {
      icon: <Workflow className="w-5 h-5 text-[var(--color-biz-bronze)]" />,
      title: 'Smart Matching Engine',
      description:
        'Evaluates company requirements against candidate skills to ensure relevance, accuracy, and long-term alignment.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[var(--color-biz-bronze)]" />,
      title: 'Bias-Reduced Decisions',
      description:
        'Every recommendation is supported by transparent logic, reducing subjectivity in recruitment outcomes.'
    },
    {
      icon: <Target className="w-5 h-5 text-[var(--color-biz-bronze)]" />,
      title: 'Business-Centric Intelligence',
      description:
        'Considers role intent, growth goals, and organizational structure—not just resumes and keywords.'
    }
  ];

  return (
    <section className="bg-[var(--color-biz-cream)] py-32 px-6 md:px-12 lg:px-24 font-['DM_Sans'] antialiased overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(var(--color-biz-charcoal) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Text Content */}
          <div>
            <header className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white mb-10 border border-[var(--color-biz-sand-muted)] shadow-sm">
                <span className="text-[var(--color-biz-bronze)] text-[10px] font-bold tracking-[0.4em] uppercase">
                  AI Decision System
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-['Martel_Sans'] font-extrabold text-[var(--color-biz-charcoal)] leading-[1.05] mb-10">
                Alix ChatBot <br />
              </h2>

              <p className="text-[19px] text-[var(--color-biz-charcoal-muted)] leading-relaxed max-w-lg">
                Alix is the intelligence layer behind BiznorX. It evaluates talent,
                business needs, and growth intent to deliver structured,
                trustworthy recruitment outcomes.
              </p>
            </header>

            <div className="space-y-12 mb-16">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-['Martel_Sans'] font-bold text-sm uppercase tracking-widest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-biz-charcoal-muted)] max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <footer className="pt-10 border-t border-[var(--color-biz-sand-muted)]">
              <div className="flex items-center gap-4 text-[11px] font-bold text-[var(--color-biz-bronze)] uppercase tracking-[0.3em]">
                <Layers className="w-4 h-4" />
                <span>Built for Scalable Hiring</span>
                <ChevronRight className="w-3 h-3 ml-auto opacity-40" />
              </div>
            </footer>
          </div>

          {/* Mobile AI Chat Preview */}
          <div className="relative mx-auto w-full max-w-[350px] lg:max-w-[300px]">
            {/* Soft device glow */}
            <div className="absolute inset-0 bg-[var(--color-biz-bronze)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

            {/* Phone Frame */}
            <div className="relative bg-[var(--color-biz-charcoal)] rounded-[3.5rem] p-[10px] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.25)]">
              <div className="bg-white rounded-[3rem] overflow-hidden flex flex-col h-[720px]  lg:h-[80vh] ">


                {/* Status Bar (Mobile Illusion) */}
                <div className="h-8 flex items-center justify-between px-6 text-[10px] text-[var(--color-biz-charcoal-muted)]">
                  <span className="font-semibold">9:41</span>
                  <div className="flex gap-1.5">
                    <div className="w-4 h-2 border border-current rounded-sm relative">
                      <div className="absolute inset-[2px] bg-current rounded-sm" />
                    </div>
                    <div className="w-1 h-2 bg-current rounded-sm" />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 py-4 flex items-center gap-3 border-b border-[var(--color-biz-sand-muted)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-biz-sand)] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[var(--color-biz-charcoal)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--color-biz-charcoal)]">
                      Alix
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[9px] text-[var(--color-biz-charcoal-muted)]">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div
                  ref={scrollContainerRef}
                  className="flex-1 px-6 py-8 space-y-8 overflow-y-auto bg-gradient-to-b from-white to-[var(--color-biz-cream-light)] scrollbar-hide"
                >
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                      <div
                        className={`px-4 py-3 rounded-2xl max-w-[85%] text-[13px] leading-relaxed shadow-sm ${msg.type === 'user'
                            ? 'bg-[var(--color-biz-sand)] text-[var(--color-biz-charcoal)] rounded-br-md'
                            : 'bg-white text-[var(--color-biz-charcoal)] border border-[var(--color-biz-sand-muted)] rounded-bl-md'
                          }`}
                      >
                        {msg.displayedContent}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Bar (Non-interactive) */}
                <div className="px-6 py-4 border-t border-[var(--color-biz-sand-muted)] bg-white">
                  <div className="h-11 rounded-2xl bg-[var(--color-biz-sand)] flex items-center px-4">
                    <div className="h-1.5 w-1/2 bg-[var(--color-biz-charcoal)] opacity-[0.08] rounded-full" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Alix;

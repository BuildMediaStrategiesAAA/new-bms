import React from 'react';
import Button from '../components/Button';
import { ArrowUpRight } from '../components/Icons';

const CONTACT_LINKS = [
  {
    id: '1',
    title: 'Email',
    detail: 'hello@buildmediastrategies.com',
    href: 'mailto:hello@buildmediastrategies.com',
  },
  {
    id: '2',
    title: 'Twitter',
    detail: '@buildmediastrategies',
    href: '#',
  },
  {
    id: '3',
    title: 'LinkedIn',
    detail: 'BuildMediaStrategies',
    href: '#',
  },
  {
    id: '4',
    title: 'Instagram',
    detail: '@buildmediastrategies',
    href: '#',
  },
];

const ContactPage: React.FC = () => {
  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.contact</span>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white mb-8">
          Say hello
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl">
          Ready to grow your business? Let's start a conversation about what BuildMediaStrategies can do for you.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="block font-mono text-sm text-text-muted mb-8">.reach out</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              whether you have a project in mind or just want to explore possibilities, we'd love to hear from you. every great partnership starts with a simple hello.
            </h2>
          </div>
          <div>
            <Button href="mailto:hello@buildmediastrategies.com">send an email</Button>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-medium">{link.title}</h3>
                  <span className="font-mono text-sm text-text-muted">{link.detail}</span>
                </div>
                <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

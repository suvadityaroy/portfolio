import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              <span className="text-primary-400">S</span>uvaditya <span className="text-primary-400">Roy</span>
            </h3>
            <p className="text-gray-400 text-sm">Security Engineer | Cloud Security Specialist</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/suvadityaroy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/suvadityaroy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:suvadityaroy.dev@gmail.com" 
              className="p-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Suvaditya Roy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

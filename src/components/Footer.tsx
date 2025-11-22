import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved. Created by Suvaditya Roy
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/suvadityaroy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/suvadityaroy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:suvadityaroy.dev@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

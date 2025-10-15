import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PLNHGC6M', 
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")!).render(<App />);

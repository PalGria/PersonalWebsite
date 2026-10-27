import { ViteReactSSG } from 'vite-react-ssg';
import '@fontsource-variable/inter';
import './index.css';
import { routes } from './routes';

export const createRoot = ViteReactSSG({ routes });

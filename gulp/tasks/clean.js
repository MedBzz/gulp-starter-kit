import { deleteAsync as del } from 'del';
import paths from '../paths.js'; // Import paths module

// Define the 'clean' task using ES Modules
export const clean = () => del([paths.dist.base]); // Delete the specified directory

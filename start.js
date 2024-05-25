import { exec } from 'child_process';

// Run frontend server
exec('npm run dev-frontend', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running frontend server: ${error.message}`);
    return;
  }
  if (stdout) console.log(`Frontend server stdout: ${stdout}`);
  if (stderr) console.error(`Frontend server stderr: ${stderr}`);
});

// Run backend server
exec('npm run dev-backend', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running backend server: ${error.message}`);
    return;
  }
  if (stdout) console.log(`Backend server stdout: ${stdout}`);
  if (stderr) console.error(`Backend server stderr: ${stderr}`);
});

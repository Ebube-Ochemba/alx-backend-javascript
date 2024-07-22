const fs = require('fs');
const https = require('https');

function getLatestVersion(packageName) {
  return new Promise((resolve, reject) => {
    https.get(`https://registry.npmjs.org/${packageName}/latest`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const version = JSON.parse(data).version;
          resolve(version);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

async function updatePackageJson() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};

  for (const [name, version] of Object.entries(dependencies)) {
    dependencies[name] = '^' + await getLatestVersion(name);
  }

  for (const [name, version] of Object.entries(devDependencies)) {
    devDependencies[name] = '^' + await getLatestVersion(name);
  }

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log('package.json updated with latest versions');
}

updatePackageJson();
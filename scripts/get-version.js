const fs = require('fs');
const path = require('path');

// package.json 파일 읽기
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// version과 description 추출
const version = packageJson.version;
const description = packageJson.description;

// 결과를 콘솔에 출력 (GitHub Actions에서 사용하기 위해)
console.log(`::set-output name=version::${version}`);
console.log(`::set-output name=description::${description}`);

function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

export function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Screenshot
![Screenshot](${data.screenshot})

## Link
[Application Link](${data.link})

## License
This project is licensed under the ${data.license} license.

## Dependencies
${data.require}

## Usage
${data.usage}

## Testing
${data.test}

## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}
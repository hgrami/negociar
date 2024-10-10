declare module '*.svg?react' {
    import React = require('react');
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
  }
  
  declare module '*.svg' {
    const content: string;
    export default content;
  }

  declare module '*.svg?raw' {
    const content: string;
    export default content;
  }
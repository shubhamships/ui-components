interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: any;
  placeholder?: string;
  className?: string;
}

function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`border-gray-300 border flex h-10 w-full rounded-md px-3 py-2 text-sm ${className}`}
      placeholder={placeholder}
    />
  );
}

export default Input;

//Array mapping -> myArr.map((item:Interface)=>{
// })

// npm install typescript @types/react @types/react-dom --save-dev
// npm install @typescript-eslint/eslint-plugin --save-dev
// npm install @typescript-eslint/parser --save-dev

// touch tsconfig.json tsconfig.node.json

//tsconfig.json
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "useDefineForClassFields": true,
//     "lib": ["ES2020", "DOM", "DOM.Iterable"],
//     "module": "ESNext",
//     "skipLibCheck": true,

//     /* Bundler mode */
//     "moduleResolution": "bundler",
//     "allowImportingTsExtensions": true,
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": true,
//     "jsx": "react-jsx",

//     /* Linting */
//     "strict": true,
//     "noUnusedLocals": true,
//     "noUnusedParameters": true,
//     "noFallthroughCasesInSwitch": true,

//     /* directory path modifier */ // not working with new vite installation
//     "baseUrl": ".",
//     "paths": {
//       "@/*": ["./src/*"]
//     }
//   },
//   "include": ["src"],
//   "references": [{ "path": "./tsconfig.node.json" }]
// }

// tsconfig.node.json
// {
//   "compilerOptions": {
//     "composite": true,
//     "skipLibCheck": true,
//     "module": "ESNext",
//     "moduleResolution": "bundler",
//     "allowSyntheticDefaultImports": true,
//     "strict": true
//   },
//   "include": ["vite.config.ts"]
// }

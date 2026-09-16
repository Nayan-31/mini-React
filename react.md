```

# File Casing and Folder Casing

- folder --> "Kabab case" example: hello-world
- file/varibles ---> "Camel Case" example: authController.js
- Class name ---> "pascal case: example: KnowledgeTransfer 

# Github Setup

- Following are the rules for commit message
  1. if you implmented a new feature then start wrtting your commit message with "feat:<describe_feature>"
  2. if you fix something inside a code base then start wrtting your commit messgae with "fix:<describe_fix>"

- Following are the rules for creating pull request before merge
   1. always merge code by creating a pull request 
   2. avoid direct push on "main" branch

# Code Base Setup
- ✅ Bundler (npx tsc --init, npm init)
- ✅ Github Setup + Branch Protection rule
- ✅ Tailwind Css Setup
- ✅ Auto Restart Dev Server (serve, tailwindcssCLI, ESBuild, browser-sync, tsc, concurrently)

### package.json - scripts
```
"scripts": {
    "dev:ts": "esbuild src/main.ts --bundle --outfile=dist/main.js --format=esm --sourcemap --watch",
    "dev:typecheck": "tsc --noEmit --watch --preserveWatchOutput",
    "dev:css": "npx @tailwindcss/cli -i ./src/style/input.css -o ./dist/style/output.css --watch",
    "dev:serve": "browser-sync start --server --single --files \"dist/**/*.js,dist/**/*.css,index.html\" --no-notify --port 3000",
    "dev": "concurrently \"npm run dev:ts\" \"npm run dev:typecheck\" \"npm run dev:css\" \"npm run dev:serve\" --names \"ESB,TSC,CSS,BS \" --prefix-colors \"cyan,blue,green,yellow\"",
    "build": "tsc --noEmit && esbuild src/main.ts --bundle --outfile=dist/main.js --format=esm --minify && npx @tailwindcss/cli -i ./src/style/input.css -o ./dist/style/output.css"
  }
```
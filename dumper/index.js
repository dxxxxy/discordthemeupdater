import fs from "fs"
import path from "path"

//get css
let css = ""
fs.readdirSync(path.join(path.resolve(), "../css")).forEach(file => {
    if (file.endsWith(".css")) {
        css += fs.readFileSync(path.join(path.resolve(), "../css", file), "utf8")
    }
})

//get classes
let classes = []
let match
while ((match = /\.([\w-]+)/g.exec(css)) !== null) {
    classes.push(match[1])
}

//keep only css-loader classes
classes = classes.filter(c => c.includes("_") || c.includes("__"))

//ignore react classes
classes = classes.filter(c => !c.startsWith("react-"))

//keep only unique classes
classes = [...new Set(classes)]

//write to file
fs.writeFileSync(path.join(path.resolve(), "../dump/dump.txt"), classes.join("\n"))
console.log(`Dumped ${classes.length} classes to ../dump/dump.txt`)

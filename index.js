#! /usr/bin/env node
const fs = require("fs")
const path = require("path")

//get paths
const inputPath = process.argv[2]
const outputPath = process.argv[3]

//check if input file exists
if (!fs.existsSync(inputPath)) {
    console.error("Input file does not exist")
    process.exit(1)
}

//get file content
let content = fs.readFileSync(inputPath, "utf8")

//get dump
const dump = fs.readFileSync(path.join(__dirname, "/dump/dump.txt"), "utf8").split("\n")

//update theme
dump.forEach(c => {
    //check if content includes class without offset
    if (content.includes(c.split("_")[0])) {
        //replace whole class name
        content = content.replace(new RegExp(`(\.${c.split("_")[0]}_\w*)`, "g"), `.${c}`)
    }
})

//write to file
fs.writeFileSync(outputPath, content)
console.log(`Updated ${inputPath} and saved to ${outputPath}`)
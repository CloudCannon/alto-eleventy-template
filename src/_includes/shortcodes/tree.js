const diffcode = require("./diffcode")

module.exports = content => {
    let placeholderChar = ">"
    let outputLines = []
    let inputLines = content.split("\n")

    inputLines.forEach((line,lineNumber) => {
        let prevLineChars = inputLines[lineNumber-1];
        let nextLineChars = inputLines[lineNumber+1];
        let currentLineChars = line.split("")

        let thisLine = []

        currentLineChars.forEach((char, charNumber) => {
            if(char === placeholderChar){
                let lineAbove = placeholderChar === prevLineChars[charNumber]
                let lineBelow = placeholderChar === nextLineChars[charNumber]
                let lineRight = placeholderChar === currentLineChars[charNumber+1]
                let lineLeft = placeholderChar === currentLineChars[charNumber-1]
                
                let newChar = "└"
                if(lineLeft)
                    newChar = "─"
                else if(lineBelow && lineRight)
                    newChar = "├"
                else if(lineBelow)
                    newChar = "│"

                thisLine.push(newChar)
            }
            else
                thisLine.push(char)
        })
        outputLines.push(thisLine.join(""))
    })
    let codeBlock = "```text\n"
    codeBlock += outputLines.join("\n")

    return diffcode(codeBlock)
}
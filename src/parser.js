const fs = require("fs").promises;

const parser = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf8");
        const chunksArr = [];
        const lines = data.split(/\r?\n/);
        for (let i = 0; i < lines.length; i += 4) {
            const chunk = lines.slice(i, i + 3);
            if (chunk.length === 3) {
                chunksArr.push(chunk.join("\n"));
            }
        }
        return chunksArr;
    } catch (err) {
        console.error(err);
    }
};

module.exports = parser;

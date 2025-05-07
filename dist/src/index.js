"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database/database");
const PORT = app_1.default.get('port');
async function main() {
    await (0, database_1.DBconect)();
}
app_1.default.listen(PORT, () => {
    console.log('server running on:', PORT);
});
main();

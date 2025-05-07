"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const music_routes_1 = __importDefault(require("./routes/music.routes"));
const video_routes_1 = __importDefault(require("./routes/video.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
//middleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//setting
app.set('port', process.env.PORT || 6000);
//routes
app.use('/api', music_routes_1.default);
app.use('/api', video_routes_1.default);
app.use('/api', user_routes_1.default);
app.use('/api', auth_routes_1.default);
//storage
app.use('/MusicUploads', express_1.default.static(path_1.default.resolve('/MusicUploads')));
app.use('/VideoUploads', express_1.default.static(path_1.default.resolve('/VideoUploads')));
exports.default = app;

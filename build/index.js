"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneBase64 = exports.EmailBase64 = exports.Phone = exports.Email = void 0;
const react_1 = __importDefault(require("react"));
function Email({ children, email, style = {}, className = "" }) {
    return (react_1.default.createElement("p", { style: Object.keys(style).length > 0
            ? Object.assign(Object.assign({}, style), { cursor: "pointer" }) : { cursor: "pointer" }, className: className, onClick: (e) => (window.location.href = `mailto:${email}`) }, children));
}
exports.Email = Email;
function Phone({ children, phone, style = {}, className = "" }) {
    return (react_1.default.createElement("p", { style: Object.keys(style).length > 0
            ? Object.assign(Object.assign({}, style), { cursor: "pointer" }) : { cursor: "pointer" }, className: className, onClick: (e) => (window.location.href = `tel:${phone}`) }, children));
}
exports.Phone = Phone;
function EmailBase64({ children, email, style = {}, className = "", }) {
    return (react_1.default.createElement("p", { style: Object.keys(style).length > 0
            ? Object.assign(Object.assign({}, style), { cursor: "pointer" }) : { cursor: "pointer" }, className: className, onClick: (e) => (window.location.href = `mailto:${atob(email)}`) }, children));
}
exports.EmailBase64 = EmailBase64;
function PhoneBase64({ children, phone, style = {}, className = "", }) {
    return (react_1.default.createElement("p", { style: Object.keys(style).length > 0
            ? Object.assign(Object.assign({}, style), { cursor: "pointer" }) : { cursor: "pointer" }, className: className, onClick: (e) => (window.location.href = `tel:${atob(phone)}`) }, children));
}
exports.PhoneBase64 = PhoneBase64;

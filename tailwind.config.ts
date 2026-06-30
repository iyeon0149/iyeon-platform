import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { iyeon: { orange:'#ff4a12', amber:'#ffb000', navy:'#020817', ink:'#07111f' } }, boxShadow:{soft:'0 24px 80px rgba(2,8,23,.10)'}, borderRadius:{'2xl':'1.5rem'} } }, plugins: [] }
export default config

import PagesRoutes from "./router.config.js"
export default {
    // singular: true,
    plugins:[
        ['umi-plugin-react',{
            antd: true,
            dva: true,
            locale: {
                enable: true,
            },
        }]
    ],
    routes: PagesRoutes,
    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        },
    },
    theme:{
        'primary-color':"#30b767"
    }
};

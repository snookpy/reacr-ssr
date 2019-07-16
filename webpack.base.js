module.exports = {
    
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modeuls/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: {browers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}
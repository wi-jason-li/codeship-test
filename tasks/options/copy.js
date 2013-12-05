module.exports = {
    server: {
        expand: true,
        cwd:   '<%= dirs.src.server %>',

        src:   '<%= files.any %>',
        dest:  '<%= dirs.dist.server %>'
    }
};
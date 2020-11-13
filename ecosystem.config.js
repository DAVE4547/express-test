module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    server : {
      user : 'root',
      host : '188.166.137.69',
      ref  : 'origin/master',
      repo : 'https://github.com/DAVE4547/express-test.git',
      path : '/projects/pm2',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
export const LazyHeroesListModule = () => new Promise(resolve => { 
    require.ensure('../heroes-list/heroes-list.module', require => {
        resolve(require('../heroes-list/heroes-list.module').HeroesListModule); 
    });
});

export const LazyDashboardModule = () => new Promise(resolve => { 
    require.ensure('../dashboard/dashboard.module', require => {
        resolve(require('../dashboard/dashboard.module').DashboardModule); 
    });
});


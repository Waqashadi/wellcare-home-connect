

const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const path = require('path');


const publicDir = path.join(__dirname, 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir);
}


const sitemap = new SitemapStream({ hostname: 'https://wellcareshomenursing.com' });


const pages = [
  '/',                              
  '/about',                        
  '/services',                        
  '/services/skilled-nursing-care',    
  '/services/post-surgical-care',      
  '/services/medication-management',   
  '/services/wound-care',            
  '/services/physical-therapy',        
  '/locations',                     
  '/appointment',                     
  '/blog',                         
  '/privacy-policy',                  
  '/terms',                            
  '/info_filled'                       
];

pages.forEach(page => sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 }));

sitemap.end();

streamToPromise(sitemap)
  .then(sm => sm.toString())
  .then(xml => {
    const filePath = path.join(publicDir, 'sitemap.xml');
    writeFileSync(filePath, xml);
    console.log(`Sitemap generated successfully at ${filePath}`);
  })
  .catch(err => console.error('Error generating sitemap:', err));

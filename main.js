const features = document.querySelector('.features'),
      feature_down = document.querySelector('.feature-down img'),
      features_link = document.querySelector('.features-link');
let f = 0, c = 0;
features.addEventListener('click', () => {
    features_link.classList.toggle('flex');
    f++;
    f%2 == 0 ? feature_down.src = './images/icon-arrow-down.svg' :  feature_down.src = './images/icon-arrow-up.svg' 
})

const company = document.querySelector('.company'),
      company_down = document.querySelector('.company span img'),
      company_link = document.querySelector('.company-link');

company.addEventListener('click', () => {
    company_link.classList.toggle('flex');
    c++;
    c%2 == 0 ? company_down.src = './images/icon-arrow-down.svg' : company_down.src = './images/icon-arrow-up.svg' 
})

// BURGER- MENU

const burger = document.querySelector('.burger'),
      mobile_close_btn = document.querySelector('.close-btn'),
      mobile_nav = document.querySelector('.mobile-nav'),
      mobile_feature_btn = document.querySelector('.mobile-feature-btn'),
      mobile_feature_arrow = document.querySelector('.mobile-feature-btn img'),
      mobile_feature_link = document.querySelector('.mobile-nav ul li .mobile-feature-link'),
      mobile_company_btn = document.querySelector('.mobile-company-btn'),
      mobile_company_arrow = document.querySelector('.mobile-company-btn img'),
      mobile_company_link = document.querySelector('.mobile-company-link');
let mf = 0, mc = 0;
burger.addEventListener('click', () => { mobile_nav.classList.toggle('flex') })
mobile_close_btn.addEventListener('click', () => { mobile_nav.classList.toggle('flex') })

mobile_feature_btn.addEventListener('click', () => {
    mf++;
    if(mf%2 === 0) {
        mobile_feature_arrow.src = './images/icon-arrow-down.svg'
        mobile_feature_link.style.setProperty('--grid', `none`)
    } else {
        mobile_feature_arrow.src = './images/icon-arrow-up.svg'
        mobile_feature_link.style.setProperty('--grid', `grid`)
    }
})

mobile_company_btn.addEventListener('click', () => {
    mf++;
    if(mf%2 === 0) {
        mobile_company_arrow.src = './images/icon-arrow-down.svg'
        mobile_company_link.style.setProperty('--grid', `none`)
    } else {
        mobile_company_arrow.src = './images/icon-arrow-up.svg'
        mobile_company_link.style.setProperty('--grid', `grid`)
    }
})

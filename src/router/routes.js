export const routes = [
  {
    key: '0',
    path: '/',
    collapsible: false,
    title: 'الرئيسية',
    icon: 'fas fa-home'
  },
  {
    key: '1',
    collapsible: true,
    title: 'قسم الملفات',
    icon: 'fas fa-archive',
    nestedRoutes: [
      {
        path: '/reception',
        title: 'الاستقبال',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/visitReports',
        title: 'تقرير الباحث',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/family',
        title: 'استمارة دراسة حالة أسرة',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/familyMembers',
        title: 'بيانات افراد الاسرة',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/donation',
        title: 'مساعدات الأسر',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/financialAssistance',
        title: 'مساعدات المالية للأسرة',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/foodStuffAssistance',
        title: 'مساعدات مواد غذائية',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/sponsorship',
        title: 'الكفالات',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/borrow',
        title: 'الاستعارة',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/upload',
        title: 'رفع و تحميل مرفقات الاسرة',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/uploadInteriorFamily',
        title: 'رفع و تحميل مرفقات اسر الولايات',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/uploadSponsor',
        title: 'رفع و تحميل مرفقات الكفالات',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/familyMembersPrint',
        title: 'طباعة افراد الاسرة',
        icon: 'fas fa-cog',
        isExternalLink: false
      }
    ]
  },
  {
    key: '2',
    collapsible: true,
    title: 'قسم الايتام',
    icon: 'fas fa-child',
    nestedRoutes: [
      {
        path: '/orphanSponsors',
        title: 'كفلاء الايتام',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/orphanFamily',
        title: 'بيانات اسر الايتام',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/orphans',
        title: 'بيانات الايتام',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/noPaymentSponsors',
        title: 'بيانات الكفالاء بلا دفعات',
        icon: 'fas fa-cog',
        isExternalLink: false
      }
    ]
  },
  {
    key: '3',
    collapsible: true,
    title: 'قسم الاسر المعسرة',
    icon: 'fas fa-shopping-cart',
    nestedRoutes: [
      // {
      //   path: '/lowIncomeFamilies',
      //   title: 'بيانات الاسر المعسرة',
      //   icon: 'fab fa-envira',
      //   isExternalLink: false
      // },
      {
        path: '/insolventFamilies',
        title: 'بيانات الاسر المعسرة',
        icon: 'fas fa-cog',
        isExternalLink: false
      },
      {
        path: '/lowIncomeSponsors',
        title: 'كفلاء الاسر المعسرة',
        icon: 'fas fa-cog',
        isExternalLink: false
      }
    ]
  },
  {
    key: '4',
    collapsible: true,
    title: 'مساعدت الاعياد',
    icon: 'fas fa-gift',
    nestedRoutes: [
      {
        path: '/ramadan',
        title: 'قائمة رمضان',
        icon: 'fas fa-moon',
        isExternalLink: false
      },
      {
        path: '/ramadanPrint',
        title: 'طباعة قائمة رمضان',
        icon: 'fas fa-print',
        isExternalLink: false
      },
      {
        path: '/eidAlAdhaDonations',
        title: 'قائمة عيد الاضحى',
        icon: 'fas fa-kaaba',
        isExternalLink: false
      },
      {
        path: '/eidAlAdhaDonationsPrint',
        title: 'طباعة قائمة عيد الاضحى',
        icon: 'fas fa-print',
        isExternalLink: false
      }
    ]
  },
  {
    key: '5',
    path: '/productiveFamilies',
    collapsible: false,
    title: 'الاسر المنتجة',
    icon: 'fas fa-briefcase'
  }
]

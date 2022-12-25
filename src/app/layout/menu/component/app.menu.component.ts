import {Component, OnInit} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
          {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/']},
          {
            label: 'Master', icon: 'fa fa-fw fa-gg',
            items: [
                {
                    label: 'currency' , icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/currency']
                },
                {
                    label: 'Country', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/country']
                },
                {
                    label: 'Customer', icon: 'fa fa-fw fa-sign-in',
                    items: [
                        {label: 'Add New Customer', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/customer/add']},
                        {label: 'View Customer', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/customer/view']}
                    ]
                },
                {
                    label: 'Supplier', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/supplier']
                },
                {
                    label: 'Location', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/location']
                },
                {
                    label: 'City', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/city']
                },
                {
                    label: 'Code', icon: 'fa fa-fw fa-sign-in',
                    items: [
                        {
                            label: 'Equipment', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/code/equipment']
                        },
                        {
                            label: 'Make', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/code/make']
                        },
                        {
                            label: 'Type', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/code/type']
                        },
                        {
                            label: 'Unit', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/code/unit']
                        }
                    ]
                },
                {
                    routerLink: ['/master/termsandcondition'],
                    label : 'Terms and Condition',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/budget'],
                    label: 'Budget',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/costcenter'],
                    label: 'Cost Center',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/businesstype'],
                    label: 'Business Type',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/jobtype'],
                    label: 'Job Type',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/job'],
                    label: 'Job',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/item'],
                    label: 'Item Master',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/asset'],
                    label: 'Asset Management',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/chartofaccount'],
                    label: 'Chart of Accounts',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/salesman'],
                    label: 'Salesman',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/pricelevel'],
                    label: 'Price Level Master',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/emailsettings'],
                    label: 'Email Settings',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/loyalty'],
                    label: 'Loyalty Master',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/offers'],
                    label: 'Offers',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/salesprocessing'],
                    label: 'Sales Processing',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/paymentmode'],
                    label: 'Payment Mode',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/accountmanualcodentry'],
                    label: 'Account Manual Code Entry',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/assetchart'],
                    label: 'Asset Chart',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/assetregister'],
                    label: 'Asset Register',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/bankguarantee'],
                    label: 'Bank Guarantee',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/changepassword'],
                    label: 'Change password',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/depreciationregister'],
                    label: 'Depreciation Register',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  // {
                  //   routerLink: ['/master/depreciationregister'],
                  //   label: 'Depreciation Register',
                  //   icon: 'fa fa-fw fa-sign-in'
                  // },
                  {
                    routerLink: ['/master/projectdescription'],
                    label: 'Project Description',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/workgroup'],
                    label: 'Work Group',
                    icon: 'fa fa-fw fa-sign-in'
                  },
                  {
                    routerLink: ['/master/department'],
                    label: 'Department Master',
                    icon: 'fa fa-fw fa-sign-in'
                  }
            ]
        },
        {
            label: 'Account', icon: 'fa fa-fw fa-book',
            items: [
                      {label: 'Invoice', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                      {label: 'Payment Voucher', icon: 'fa fa-fw fa-gear', routerLink: ['/account/paymentvoucher']},
                      // {label: 'Payment Voucher', icon: 'fa fa-fw fa-wrench', routerLink: ['/account/paymentvoucher']},
                      {label: 'Receipt Voucher', icon: 'fa fa-fw fa-sign-in', routerLink: ['/account/receiptvoucher']},
                      {label: 'Journal Voucher', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                      {label: 'Contra  Voucher', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                      {label: 'Debit Note', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                      {label: 'Credit Note', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                      {label: 'Journal Invoice', icon: 'fa fa-fw fa-sign-in', routerLink: ['/account/journalinvoice']},
                      {label: 'Purchase Journal Voucher', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                      {label: 'Voucher Printing', icon: 'fa fa-fw fa-print', routerLink: ['/account/voucherprinting']},
                      {label: 'Reports', icon: 'fa fa-fw fa-sign-in',
                      items: [
                                {label: 'General Accounts Statement', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'General Accounts Statement(Multiple Selection)', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'General Accounts Statement by Group', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Accounts Statement By Foreign Currency', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Outstanding Statement', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Customer Statement', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Bank Statement', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Bank Transfer Statement', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Job Cost Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Ageing Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Bank Book', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Cash Book', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Asset Purchase List', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Voucher Printing', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'VAT Statement', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']}
                              ]},
                        {label: 'Bank Receipt Voucher', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                        {label: 'Bank Payment Voucher', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']}

                    ] },
        {
            label: 'Store And WareHouses', icon: 'fa fa-fw fa-book',
            items: [
                      {label: 'Good Receipt Voucher (GRN)', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                      {label: 'GRN Pending List', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                      {label: 'Issue To Production', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                      {label: 'Issue Return(Received Back from Production)', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                      {label: 'Reports', icon: 'fa fa-fw fa-gear',
                      items: [
                                {label: 'Stock Ledger Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Stock Movement Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Stock Ledger', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Stock Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Stock Report(Base Unit)', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Stock Movement', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Stock Adjustment Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Reorder Level Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'BOM Status', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Issue Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Invoice Profit Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Stock Ageing Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Item Wise Profit Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']}
                              ]},
               
                      {label: 'Damage Entry', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                      {label: 'Stock Adjustment', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                      {label: 'Stock Transfer', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                      {label: 'Opening Stock', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                      {label: 'Stock Reservation', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                      {label: 'Stock Transfer Job Wise', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                      {label: 'Manufacture Items', icon: 'fa fa-fw fa-wrench', 
                      items: [
                                {label: 'Manufacture(Component List)', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                                {label: 'Item Manufacturing Entry', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']}
                              ]},
                      {label: 'Item List', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']}
               
                    ]},
        {
            label: 'Sales', icon: 'fa fa-fw fa-book',
            items: [
                {label: 'Customer Sales Order', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Delivery Note', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Customer Quotation', icon: 'fa fa-fw fa-gear', routerLink: ['sale/customerquotation']},
                {label: 'Customer Enquiry', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Reports', icon: 'fa fa-fw fa-gear',
                items: [
                  {label: 'Customer Enquiry Search', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                  {label: 'Customer Order Tracking', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                  {label: 'Customer Wise Sales Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                  {label: 'Salesman Wise Outstanding Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                  {label: 'Sales Men Wise Sales Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},
                  {label: 'Sales Report', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']},                      
                  {label: 'Sales Summary by Date', icon: 'fa fa-fw fa-sign-in', routerLink: ['/utils']}
                       ]},
                {label: 'Bill of Materials (BOM)', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Bill of Quantity (BOQ)', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'List Invoice Without Account Entry', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
                     ]
        },
        {
            label: 'Procurement', icon: 'fa fa-fw fa-book',
            items: [
              {label: 'Purchase Return', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
              {label: 'Purchase Order', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
              {label: 'General Purchase Order', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
              {label: 'RFQ', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
              {label: 'Purchase Requisition', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
              {label: 'Supplier Quotation', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
              {label: 'Reports', icon: 'fa fa-fw fa-gear', 
              items:[
                {label: 'Purchase Order Approval Status', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Purchase Order List', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Purchase Order Tracking', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Purchase Requisition Status', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Price Comparison', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Purchase Supplier Wise', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Purchase Report Detailed', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Purchase Report', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'General Purchase Order Report', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
              ]},
            ]
            
        },
        {
            label: 'MIS Report', icon: 'fa fa-fw fa-book',
            items: [
              {label: 'Trial Balance', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
              {label: 'Profit and Loss', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
              {label: 'Balance Sheet', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
              {label: 'User Activity', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
                  ]
          },
        {
            label: 'Administration', icon: 'fa fa-fw fa-book',
            items: [
                {label: 'General Settings', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Program Settings', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Permission Settings', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Barcode Settings', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Account Settings', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Settings(Option)', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Query Window', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Company Master', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'User Profile', icon: 'fa fa-fw fa-gear', routerLink: ['/administration/usermaster']},
                {label: 'Work Group Master', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Report Type Master', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Financial Period Closing', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Link Accounts', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Backup', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
                {label: 'Check List', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']}
              ]
        }
    ];
}

    changeTheme(theme) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const href = 'assets/theme/theme-' + theme + '.css';

        this.replaceLink(themeLink, href);
    }
    changeLayout(layout) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const href = 'assets/layout/css/layout-' + layout + '.css';

        this.replaceLink(layoutLink, href);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    onMenuClick() {
        this.app.onMenuClick();
    }
}

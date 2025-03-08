export interface Color {
    name: string;
    cssVariable: string;
    value: string;
}

export const primaryColors: Color[] = [
    { cssVariable: '--b2b-brand-red-01', name: 'Brand Red/01 Red', value: '#d81e05' },
    { cssVariable: '--b2b-brand-red-02', name: 'Brand Red/02 Red', value: '#ac0404' },
    { cssVariable: '--b2b-brand-red-03', name: 'Brand Red/03 Red', value: '#780303' },
    { cssVariable: '--b2b-brand-red-04', name: 'Brand Red/04 Red', value: '#F6CACA' }
];

export const secondaryColors: Color[] = [
    { cssVariable: '--b2b-brand-blue-01', name: 'Brand Blue/01 Blue', value: '#2d373d' },
    { cssVariable: '--b2b-brand-blue-02', name: 'Brand Blue/02 Blue', value: '#526570' },
    { cssVariable: '--b2b-brand-blue-03', name: 'Brand Blue/03 Blue', value: '#9cb0bc' },
    { cssVariable: '--b2b-brand-blue-04', name: 'Brand Blue/04 Blue', value: '#89969a' }
];

export const greyColors: Color[] = [
    { cssVariable: '--b2b-gray-scale-01', name: 'GreyScale/01 (Grey)', value: '#737373' },
    { cssVariable: '--b2b-gray-scale-02', name: 'GreyScale/02 (Grey)', value: '#c9c8c8' },
    { cssVariable: '--b2b-gray-scale-03', name: 'GreyScale/03 (Grey)', value: '#eae9e9' },
    { cssVariable: '--b2b-gray-scale-04', name: 'GreyScale/04 (Grey)', value: '#f5f5f5' },
    { cssVariable: '--b2b-gray-scale-05', name: 'GreyScale/05 (White)', value: '#fff' }
];

export const statesColors: Color[] = [
    { cssVariable: '--b2b-state-disabled', name: 'States/Disabled', value: '#d2d4cf' },
    { cssVariable: '--b2b-state-info-01', name: 'States/Info01', value: '#0d82bd' },
    { cssVariable: '--b2b-state-info-02', name: 'States/Info02', value: '#b7daec' },
    { cssVariable: '--b2b-state-info-bg', name: 'States/InfoBG', value: '#eef6fb' },
    { cssVariable: '--b2b-state-success-01', name: 'States/Success01', value: '#008c47' },
    { cssVariable: '--b2b-state-success-02', name: 'States/Success02', value: '#dce5c1' },
    { cssVariable: '--b2b-state-success-bg', name: 'States/SuccessBG', value: '#f7f9f0' },
    { cssVariable: '--b2b-state-error-01', name: 'States/Error01', value: '#da2a2a' },
    { cssVariable: '--b2b-state-error-02', name: 'States/Error02', value: '#f6caca' },
    { cssVariable: '--b2b-state-error-bg', name: 'States/ErrorBG', value: '#fdf2f2' },
    { cssVariable: '--b2b-state-alert-01', name: 'States/Alert01', value: '#e46b15' },
    { cssVariable: '--b2b-state-alert-02', name: 'States/Alert02', value: '#fff4ec' },
    { cssVariable: '--b2b-state-alert-bg', name: 'States/AlertBG', value: '#fffaf6' }
];

export const customerColors: Color[] = [
    { cssVariable: '--b2b-customer-gold', name: 'Customer/Gold', value: '#ac9316' },
    { cssVariable: '--b2b-customer-gold-bg', name: 'Customer/GoldBG', value: '#e7dfba' },
    { cssVariable: '--b2b-customer-silver', name: 'Customer/Silver', value: '#949494' },
    { cssVariable: '--b2b-customer-silver-bg', name: 'Customer/SilverBG', value: '#d4d4d4' },
    { cssVariable: '--b2b-customer-platinum', name: 'Customer/Platinum', value: '#7994a4' },
    { cssVariable: '--b2b-customer-platinum-bg', name: 'Customer/PlatinumBG', value: '#d7dfe4' }
];

export const supportColors: Color[] = [
    { cssVariable: '--b2b-support-01-dark-orange', name: 'Support/01', value: '#f2a105' },
    { cssVariable: '--b2b-support-02-light-orange', name: 'Support/02', value: '#ffb37f' },
    { cssVariable: '--b2b-support-03-yellow', name: 'Support/03', value: '#ffd618' },
    { cssVariable: '--b2b-support-04-green', name: 'Support/04', value: '#a2c617' },
    { cssVariable: '--b2b-support-05-turquoise', name: 'Support/05', value: '#0ca6b3' },
    { cssVariable: '--b2b-support-06-dark-pink', name: 'Support/06', value: '#e6078c' },
    { cssVariable: '--b2b-support-07-light-pink', name: 'Support/07', value: '#f282c5' },
    { cssVariable: '--b2b-support-08-purple', name: 'Support/08', value: '#a51783' },
    { cssVariable: '--b2b-support-09-red', name: 'Support/09', value: '#f33939' },
    { cssVariable: '--b2b-support-10-dark-brown', name: 'Support/10', value: '#734b30' },
    { cssVariable: '--b2b-support-11-light-brown', name: 'Support/11', value: '#c59672' },
];

export const transparenciesColors: Color[] = [
    { cssVariable: '--b2b-transparencies-black-blue-70', name: 'Overlay/70', value: 'rgba(45, 55, 61, 0.7)' },
    { cssVariable: '--b2b-transparencies-white-70', name: 'White/70', value: 'rgba(255, 255, 255, 0.7)' },
    { cssVariable: '--b2b-transparencies-white-40', name: 'White/40', value: 'rgba(255, 255, 255, 0.4)' },
    { cssVariable: '--b2b-transparencies-white-20', name: 'White/20', value: 'rgba(255, 255, 255, 0.2)' }
];

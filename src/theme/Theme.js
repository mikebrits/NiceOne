export const primaryColor = '#FD5739';
export const gradient = 'linear-gradient(180deg, #FD5739 0%, #428DC2 100%)';

export const defaultTheme = {
    primary : '#FD5739',
    pagePadding : ` padding-top : 16px;
                    padding-bottom : 16px;
    `,
    HelperText : `
                    width : 100%;
                    text-align: center;
                    color: #91929E;
                    font-size: 18px;
                    margin : 8px 0px
    `
};

export const blueTheme = {
    ...defaultTheme,
    primary : '#537bfd',
};

export const activeTheme = blueTheme;

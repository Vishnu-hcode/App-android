declare module 'react-native-google-recaptcha-v3' {
  import * as React from 'react';

  export interface GoogleReCaptchaProps {
    siteKey: string;
    baseUrl: string;
    onVerify: (token: string) => void;
    onError?: (error: any) => void;
    onExpire?: () => void;
    size?: 'invisible' | 'normal' | 'compact';
    lang?: string;
  }

  export default class GoogleReCaptcha extends React.Component<GoogleReCaptchaProps> {}
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CapFlow',
  description: 'CapFlow Website',
}

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>hey ram</title>
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900&amp;family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />


 
    <link rel="stylesheet" href="template-assets/assets/vendors/bootstrap/css/bootstrap.min.css" />

    <link rel="stylesheet" href="assets/vendors/bootstrap-select/bootstrap-select.min.css" />
    
    <link rel="stylesheet" href="template-assets/assets/vendors/animate/animate.min.css" />
    
    <link rel="stylesheet" href="template-assets/assets/vendors/fontawesome/css/all.min.css" />
    
    <link rel="stylesheet" href="template-assets/assets/vendors/jquery-ui/jquery-ui.css" />
    
    <link rel="stylesheet" href="template-assets/assets/vendors/jarallax/jarallax.css" />
   
    <link rel="stylesheet" href="template-assets/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />

    <link rel="stylesheet" href="template-assets/assets/vendors/nouislider/nouislider.min.css" />
    
    <link rel="stylesheet" href="template-assets/assets/vendors/nouislider/nouislider.pips.css" />
    <link rel="stylesheet" href="template-assets/assets/vendors/tiny-slider/tiny-slider.css" />
    
    <link rel="stylesheet" href="template-assets/assets/vendors/nionx-icons/style.css" />
    
    <link rel="stylesheet" href="template-assets/assets/vendors/tiny-slider/tiny-slider.css" />
    <link rel="stylesheet" href="template-assets/assets/vendors/owl-carousel/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="template-assets/assets/vendors/owl-carousel/css/owl.theme.default.min.css" />

    
    <link rel="stylesheet" href="template-assets/assets/css/nionx.css" />
      </head>
      <body className={inter.className}>{children}
      
      
      
      
      
      
      
    <script src="template-assets/assets/vendors/jquery/jquery-3.7.0.min.js"></script>
   
    <script src="template-assets/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="template-assets/assets/vendors/bootstrap-select/bootstrap-select.min.js"></script>
    
    <script src="template-assets/assets/vendors/jarallax/jarallax.min.js"></script>
    
    <script src="template-assets/assets/vendors/jquery-ui/jquery-ui.js"></script>
   
    <script src="template-assets/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>
    
    <script src="template-assets/assets/vendors/jquery-appear/jquery.appear.min.js"></script>
    
    <script src="template-assets/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
    
    <script src="template-assets/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
    
    <script src="template-assets/assets/vendors/jquery-validate/jquery.validate.min.js"></script>
    
    <script src="template-assets/assets/vendors/nouislider/nouislider.min.js"></script>
   
    <script src="template-assets/assets/vendors/hover-extended-magnify/extm.min.js"></script>
    
    <script src="template-assets/assets/vendors/tiny-slider/tiny-slider.js"></script>
    
    <script src="template-assets/assets/vendors/wnumb/wNumb.min.js"></script>
   
    <script src="template-assets/assets/vendors/owl-carousel/js/owl.carousel.min.js"></script>
    
    <script src="template-assets/assets/vendors/tiny-slider/tiny-slider.js"></script>
    
    <script src="template-assets/assets/vendors/wow/wow.js"></script>
   
    <script src="template-assets/assets/vendors/imagesloaded/imagesloaded.min.js"></script>
   
    <script src="template-assets/assets/vendors/isotope/isotope.js"></script>
    
    <script src="template-assets/assets/vendors/countdown/countdown.min.js"></script>
    
    <script src="../../cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></script>
    
    <script src="template-assets/assets/vendors/jquery-circleType/jquery.circleType.js"></script>
    <script src="template-assets/assets/vendors/jquery-lettering/jquery.lettering.min.js"></script>

   
    <script src="template-assets/assets/js/nionx.js"></script>
      </body>
    </html>
  )
}

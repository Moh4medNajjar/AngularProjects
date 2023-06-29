import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-widgets',
  templateUrl: './bottom-widgets.component.html',
  styleUrls: ['./bottom-widgets.component.css']
})
export class BottomWidgetsComponent {
  getColor(remaining: string): string {
    const remainingPercentage = parseFloat(remaining);

    if (remainingPercentage > 80) {
      return 'green-gradient';
    } else if (remainingPercentage > 60) {
      return 'yellow-gradient';
    } else if (remainingPercentage > 30) {
      return 'orange-gradient';
    } else {
      return 'red-gradient';
    }
  }

  getStatusColor(status: string): string {
    if (status === "Active") {return 'greenC';}
    else if (status === "Pending") {return 'yellowC';}
    else {return 'redC';}
  }




  tableData = [
    { image: 'figma.png',
      product: 'Figma',
      card: '*****9423',
      duration: '1 month',
      price: '$745',
      status: 'Active',
      expiration: 'Jan 12, 2024',
      remaining: '80%' },

      {
        image: 'adobeXD.png',
        product: 'Adobe XD',
        card: '*****2380',
        duration: '3 months',
        price: '$423',
        status: 'Active',
        expiration: 'Sep 3, 2023',
        remaining: '90%' },

        {
          image: 'illustrator.webp',
          product: 'Adobe Illustrator',
          card: '*****2323',
          duration: '7 month',
          price: '$866',
          status: 'Active',
          expiration: 'Jan 12, 2024',
          remaining: '70%' },

          {
            image: 'zoom.webp',
            product: 'Zoom',
            card: '*****9423',
            duration: '1 month',
            price: '$745',
            status: 'Pending',
            expiration: 'Jan 12, 2024',
            remaining: '40%' },

            {
              image: 'microsoft.png',
              product: 'Microsoft Office 365',
              card: '*****6973',
              duration: '5 month',
              price: '$345',
              status: 'Expired',
              expiration: 'Jan 12, 2024',
              remaining: '10%' },

  ]
}

# Home Furniture & Appliances Retail SPA Website

A modern, responsive, high-converting Single Page Application (SPA) designed for home furniture, kitchen appliances, and cookware retail businesses. Built for zero customer confusion with direct WhatsApp orders, cash on delivery support, instant search, and complete open-source host deployment readiness.

## 📦 Included Inventory (All 24 Items from Document)
1. **Mixie** (Heavy Duty 750W Mixer Grinder)
2. **Grinder** (Table Top 2-Litre Wet Grinder)
3. **Cooker** (5L Tri-Ply Stainless Steel Pressure Cooker)
4. **Induction cooker** (2000W Smart Touch Induction Cooktop)
5. **Hot box** (Insulated SS Casserole Set of 3)
6. **Iron box** (Heavyweight 1000W Dry Iron Box)
7. **Flask** (1000ml Vacuum Insulated Thermos Flask)
8. **Ceiling Fan** (High-Speed 1200mm Decorative Fan)
9. **Table Fan** (High-Velocity 400mm Aerodynamic Desk Fan)
10. **Pedestal Fan** (Height-Adjustable Oscillating Stand Fan)
11. **Air cooler** (55-Litre Heavy Duty Desert Cooler)
12. **Dining table** (6-Seater Solid Sheesham Wood Dining Set)
13. **Dressing table** (Contemporary Bedroom Vanity Table with Full Mirror)
14. **Steel berrow (bureau)** (20-Gauge CRCA Heavy Steel Almirah with Locker)
15. **Wood berrow (bureau)** (3-Door Teak Finish Wardrobe)
16. **Iron bed** (Heavy Pipe Metal Queen Size Bed / Cot)
17. **Bed** (Solid Teak Finish King Size Cot with Orthopedic Mattress Combo)
18. **Chair** (Heavy Duty Premium Arm Chairs - Set of 4)
19. **Folding table** (Portable Multi-Purpose Folding Table)
20. **Teapoy** (Tempered Glass Top Wooden Center Table)
21. **Money Office table** (Executive Cash Counter Desk with Lockable Drawers)
22. **Dosa tawa** (11-Inch Pre-Seasoned Heavy Cast Iron Tawa)
23. **Paniyara dana** (12-Pit Cast Iron Kuzhi Paniyaram Pan)
24. **Appa chetty** (Non-Stick & Cast Iron Concave Appam Maker with SS Lid)

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Open-Source Hosting Guide

### Option 1: 100% Free on GitHub Pages (Zero Server Cost)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment > Source**, select **GitHub Actions**
3. The included workflow (`.github/workflows/deploy.yml`) will automatically deploy the site to `https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`!

### Option 2: Self-Host via Docker & Coolify (Open-Source PaaS)
Run directly anywhere using the included `Dockerfile` and `nginx.conf`:
```bash
docker build -t furniture-spa .
docker run -d -p 80:80 furniture-spa
```
You can also connect this repository to [Coolify](https://coolify.io) (Open-source self-hosted alternative to Vercel/Heroku) on any \$4/month Linux VPS.

---

## ⚙️ How to Update Store Contact & WhatsApp Number
Open `src/data/products.js` and change the `storeInfo` object:
```javascript
export const storeInfo = {
  name: "Your Store Name",
  whatsappNumber: "+919876543210", // Put your phone number here with country code
  displayPhone: "+91 98765 43210",
  address: "Your Showroom Address Here",
  timings: "9:00 AM - 9:30 PM",
};
```
Whenever a customer clicks "Order via WhatsApp" or checks out their cart, the order details will be pre-formatted and sent directly to your WhatsApp!

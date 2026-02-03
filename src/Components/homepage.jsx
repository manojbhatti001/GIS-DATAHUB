import React, { useState } from 'react';
import { Globe, Search, Mail, Star } from 'lucide-react';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categoriesData = [
    {
      title: "Indian Satellite Data",
      items: [
        { name: "Bhuvan Open Data Download", url: "https://bhuvan-app3.nrsc.gov.in/data/download/index.php" },
        { name: "ISRO Bhoonidhi (Multi-Sensor)", url: "https://bhoonidhi.nrsc.gov.in/bhoonidhi/" },
        { name: "GADM-Shapefile (Portal shapefiles)", url: "https://gadm.org/download_country.html" },
        { name: "MAPcruzin-Shapefile-Portal (shapefiles portal)", url: "https://www.mapcruzin.com/" },
        { name: "Survey of India (Official Maps)", url: "https://onlinemaps.surveyofindia.gov.in/Home.aspx" },
      ],
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-500",
    },
    {
      title: "Global Satellite & Aerial",
      items: [
        { name: "NASA Worldview (Live Imagery)", url: "https://worldview.earthdata.nasa.gov/" },
        { name: "Copernicus Data Space (Sentinel)", url: "https://browser.dataspace.copernicus.eu/" },
        { name: "OpenAerialMap (Drone)", url: "https://map.openaerialmap.org/" },
        { name: "Planet Explorer (Daily Imagery)", url: "https://www.planet.com/explorer/" },
        { name: "USGS EarthExplorer (Landsat)", url: "https://earthexplorer.usgs.gov/" },
      ],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-500",
    },
    {
      title: "Elevation & Tools",
      items: [
        { name: "JCalura Elevation Tool", url: "https://jcallura.github.io/" },
        { name: "GPS Visualizer (SRTM/Aster)", url: "https://www.gpsvisualizer.com/elevation" },
        { name: "ASF Alaska (Dem data)", url: "https://search.asf.alaska.edu/" },
        { name: "USGS National Map (US DEM)", url: "https://apps.nationalmap.gov/downloader/" },
      ],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500",
    },
    {
      title: "3D Visualization & Scenes",
      items: [
        { name: "3D-Mapper (Drone Modeling)", url: "https://3d-mapper.com/" },
        { name: "ArcGIS Scene Viewer (3D Web)", url: "https://www.arcgis.com/home/webscene/viewer.html" },
        { name: "Equator Studios (3D Topo)", url: "https://maps.equatorstudios.com/" },
        { name: "world-population Visualization (Live World Population)", url: "https://www.worldometers.info/world-population/" },
        { name: "Landsat Explorer (data Visualization)", url: "https://livingatlas.arcgis.com/" },
      ],
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-500",
    },
    {
      title: "Map Hosting & Development",
      items: [
        { name: "MapTiler (Vector Tiles)", url: "https://www.maptiler.com/" },
        { name: "bbbike (Vector data)", url: "https://extract.bbbike.org/" },
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
    },
    {
      title: "Open Data & Urban",
      items: [
        { name: "Data.gov.in (OGD India)", url: "https://data.gov.in/" },
        { name: "USGS lidar-explorer (Lidar data)", url: "https://apps.nationalmap.gov/lidar-explorer/#/" },
        { name: "OpenCity India (Urban Data)", url: "https://data.opencity.in/dataset" },
        { name: "Haryana Musuvi", url: "https://hsac.org.in/haryana_mussavi/" },
        { name: "Esri Living Atlas (Global)", url: "https://livingatlas.arcgis.com/en/home/" },
      ],
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-500",
    },
    {
      title: "Environment & Climate",
      items: [
        { name: "CPCB Monitoring (Pollution)", url: "https://cpcb.nic.in/manual-monitoring/" },
        { name: "India-WRIS (Water)", url: "https://indiawris.gov.in/wris/#/" },
        { name: "FAO-Portal (Soil)", url: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/faounesco-soil-map-of-the-world/en/" },
        { name: "CHRS Rainfall Portal", url: "https://chrsdata.eng.uci.edu/" },
        { name: "Esri Land Cover (LULC)", url: "https://livingatlas.arcgis.com/" },
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-500",
    },
    {
      title: "3D Mapping Visualisation Site",
      items: [
        { name: "STREETS GL (3D Map)", url: "https://streets.gl/" },
        { name: "OSM BUILDING (3D Map)", url: "https://osmbuildings.org/" },
        { name: "3D STREET", url: "https://3dstreet.app/" },
      ],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-500",
    },
    {
      title: "Geology & Mining",
      items: [
        { name: "GSI Bhukosh (Geological Data)", url: "https://bhukosh.gsi.gov.in/Bhukosh/" },
        { name: "Earthquake Data (National Center for Seismology)", url: "https://seismo.gov.in/MIS/riseq/earthquake" },
      ],
      color: "from-yellow-500 to-yellow-600",
      iconColor: "text-yellow-500",
    },
  ];

  const filteredCategories = categoriesData.filter(cat =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredResources = [
    {
      name: 'ISRO Bhuvan',
      category: 'Satellite & Remote Sensing',
      description: 'ISRO\'s geospatial platform with free satellite data access',
      image: '🛰️',
      color: 'from-amber-400 to-orange-500',
      url: 'https://bhuvan-app3.nrsc.gov.in/data/download/index.php'
    },
    {
      name: 'Google Earth',
      category: 'GIS Tools & Visualization',
      description: 'Interactive 3D mapping and exploration of our planet',
      image: '🌍',
      color: 'from-emerald-400 to-green-500',
      url: 'https://earth.google.com/web/'
    },
    {
      name: 'OpenStreetMap',
      category: 'Maps & Government Data',
      description: 'Community-driven, editable map of the entire world',
      image: '🗺️',
      color: 'from-sky-400 to-blue-500',
      url: 'https://www.openstreetmap.org/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                GIS Directory
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#categories" className="text-gray-700 hover:text-blue-600 transition font-medium">
                Categories
              </a>
              <a href="#featured" className="text-gray-700 hover:text-blue-600 transition font-medium">
                Featured
              </a>
            
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl opacity-20 rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Star className="w-4 h-4 text-white fill-white animate-pulse" />
              <span className="text-sm font-bold text-white">Trusted GIS Resource Hub • Est. 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-gray-900 mb-6 leading-tight">
              Discover the Best
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                GIS Resources
              </span>
            </h1>
            
            {/* Description */}
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
                Accurated hub of GIS and Remote Sensing resources for students, researchers, and professionals
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="#categories"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
              >
                Explore Resources →
              </a>
              <a 
                href="#featured"
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all hover:scale-105 hover:border-blue-500 hover:text-blue-600"
              >
                View Featured
              </a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  37+
                </div>
                <p className="text-sm font-semibold text-gray-600">Resources</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  9
                </div>
                <p className="text-sm font-semibold text-gray-600">Categories</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-sm font-semibold text-gray-600">Free Access</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-sm font-semibold text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of the most popular GIS tools and platforms
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredResources.map((resource, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform">
                  {resource.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {resource.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-3">
                  <span className="text-xs font-semibold text-blue-700">{resource.category}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {resource.description}
                </p>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full px-6 py-3 bg-gradient-to-r ${resource.color} text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Visit Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access a comprehensive collection of GIS resources organized by category
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-2xl relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for data source (e.g. NASA, Bhuvan, Elevation...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
                />
              </div>
            </div>
          </div>

          {/* Data Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${card.color} rounded-lg mb-4 shadow-sm`}>
                  <h3 className="font-bold text-white text-sm">{card.title}</h3>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition flex items-start gap-2 group/item`}
                      >
                        <span className={`${card.iconColor} mt-0.5 group-hover/item:translate-x-1 transition-transform`}>▸</span>
                        <span className="group-hover/item:underline">{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-block bg-red-50 border border-red-200 rounded-xl px-8 py-6">
                <p className="text-red-600 font-semibold text-lg">
                  No resources found matching "{searchTerm}"
                </p>
              </div>
            </div>
          )}

          {/* Bottom Section */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {/* Contact Box */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 hover:shadow-2xl transition-all relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-xl">Get in Touch</h3>
                </div>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Have a GIS resource to suggest? Send us an email and we'll review it!
                </p>
                
                <a 
                  href="mailto:rajputrohit9624@gmail.com"
                  className="block bg-white hover:bg-blue-50 rounded-xl px-5 py-4 transition-all group/email"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email us at</p>
                      <p className="font-semibold text-gray-900 group-hover/email:text-blue-600 transition-colors">
                        rajputrohit9624@gmail.com
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover/email:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* About Box */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 hover:shadow-2xl transition-all relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <h3 className="font-bold text-white text-xl">About This Site</h3>
                </div>
                
                <p className="text-purple-100 mb-5 leading-relaxed">
                  Your comprehensive hub for GIS and Remote Sensing resources
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white text-sm">Indian & global satellite data portals</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white text-sm">DEM sources & elevation tools</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white text-sm">Visualization platforms & GIS tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700 px-4 sm:px-8 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Credits Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-8">

            {/* Developer */}
            <div className=" rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto text-center">
              <p className="text-xs text-cyan-100 uppercase tracking-wide font-semibold mb-1.5">
                Developed By
              </p>
              <h3 className="text-xl font-bold text-white mb-1.5">
                Rohit Rajput
              </h3>
              
            </div>

            {/* Inspiration */}
            <div className=" rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto text-center">
              <p className="text-xs text-pink-100 uppercase font-semibold mb-1.5 tracking-wide">
                Inspired By
              </p>
              <h3 className="text-xl font-bold text-white">
                Rakesh Chauhan Sir
              </h3>
            </div>

          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © 2026 <span className="text-white font-semibold">GIS Resource Directory</span> - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

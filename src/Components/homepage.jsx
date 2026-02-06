import React, { useState } from 'react';
import { Globe, Search, Mail, Star } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';
import logo from '../assets/r1.png';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categoriesData = [
    
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
      title: "Map Hosting & Development",
      items: [
        { name: "MapTiler (Vector Tiles)", url: "https://www.maptiler.com/" },
        { name: "bbbike (Vector data)", url: "https://extract.bbbike.org/" },
      ],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
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
    
    {
      title: "Environment & Climate",
      items: [
        { name: "CPCB Monitoring (Pollution)", url: "https://cpcb.nic.in/manual-monitoring/" },
        { name: "India-WRIS (Water)", url: "https://indiawris.gov.in/wris/#/" },
        { name: "FAO-Portal (Soil)", url: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/faounesco-soil-map-of-the-world/en/" },
        { name: "CHRS Rainfall Portal", url: "https://chrsdata.eng.uci.edu/" },
        { name: "Esri Land Cover (LULC)", url: "https://livingatlas.arcgis.com/" },
        { name: "NASA Giovanni", url: "https://giovanni.gsfc.nasa.gov/giovanni/" },
        { name: "NASA Power", url: "https://power.larc.nasa.gov/data-access-viewer/" },
      ],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-500",
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
              {/* GIS Logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
             
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                GIS Directory
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#categories" className="text-gray-700 hover:text-blue-600 transition font-bold">
                Categories
              </a>
              <a href="#featured" className="text-gray-700 hover:text-blue-600 transition font-bold">
                Featured
              </a>
            
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="GIS Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-500/20 via-transparent to-pink-500/20 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>
        
        {/* Animated Gradient Orbs - Reduced */}
        <div className="absolute top-10 left-5 sm:left-10 w-40 sm:w-56 h-40 sm:h-56 bg-gradient-to-br from-blue-400 to-cyan-300 opacity-15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-purple-400 to-pink-400 opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        
        {/* Floating Geometric Shapes - Reduced */}
        <div className="absolute top-16 right-10 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl opacity-10 rotate-12 animate-float shadow-2xl" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-16 left-10 sm:left-24 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-10 animate-float" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        
        {/* Particle Elements - Reduced */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Premium Badge with Animation */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-4 sm:mb-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-card-entrance border border-white/20 backdrop-blur-sm group">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Trusted GIS Resource Hub • Est. 2026</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading with Enhanced Animation - More Compact */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 sm:mb-4 leading-tight animate-card-entrance px-4" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block drop-shadow-2xl">Discover the</span>{' '}
              <span className="inline-block relative">
                <span className="relative z-10 drop-shadow-2xl">Best</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-30 blur-xl rounded-lg"></div>
              </span>
              <br />
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="bg-white bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
                  GIS Resources
                </span>
              </span>
            </h1>
            
           
            {/* CTA Buttons with Enhanced Effects - More Compact */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center mb-8 sm:mb-10 animate-card-entrance px-4" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#categories"
                className="group relative px-5 sm:px-7 py-2.5 sm:py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105 overflow-hidden"
              >
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Resources
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a 
                href="#featured"
                className="group relative px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white/95 backdrop-blur-md border-2 border-white/80 text-gray-700 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:border-indigo-400 hover:text-indigo-600 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  View Featured
                </span>
              </a>
            </div>

            {/* Enhanced Stats Cards - More Compact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 max-w-4xl mx-auto px-4">
              {/* Resources Card */}
              <div className="group relative bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-card-entrance border border-white/70 overflow-hidden" style={{ animationDelay: '0.4s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                    37+
                  </div>
                  <p className="text-xs font-bold text-gray-600">Resources</p>
                </div>
              </div>
              
              {/* Categories Card */}
              <div className="group relative bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-card-entrance border border-white/70 overflow-hidden" style={{ animationDelay: '0.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                    9
                  </div>
                  <p className="text-xs font-bold text-gray-600">Categories</p>
                </div>
              </div>
              
              {/* Free Access Card */}
              <div className="group relative bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-card-entrance border border-white/70 overflow-hidden" style={{ animationDelay: '0.6s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                    100%
                  </div>
                  <p className="text-xs font-bold text-gray-600">Free Access</p>
                </div>
              </div>
              
              {/* 24/7 Available Card */}
              <div className="group relative bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-card-entrance border border-white/70 overflow-hidden" style={{ animationDelay: '0.7s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <p className="text-xs font-bold text-gray-600">Available</p>
                </div>
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
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 perspective-1000">
            {featuredResources.map((resource, idx) => (
              <div 
                key={idx}
                className="animate-card-entrance preserve-3d group"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative h-full">
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${resource.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:blur-lg`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-white group-hover:-translate-y-3 group-hover:scale-[1.03] overflow-hidden h-full flex flex-col">
                    
                    {/* Animated Background Orbs */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${resource.color} opacity-20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700`}></div>
                      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${resource.color} opacity-20 rounded-full blur-3xl -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700`}></div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-3xl">
                      <div className="animate-shimmer absolute inset-0"></div>
                    </div>

                    {/* Icon/Emoji with Animation */}
                    <div className="relative z-10 text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <span className="text-5xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-500">
                          {resource.image}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {resource.name}
                    </h3>

                    {/* Category Badge */}
                    <div className="relative z-10 flex justify-center mb-4">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${resource.color} rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-bold text-white">{resource.category}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative z-10 text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-center flex-grow">
                      {resource.description}
                    </p>

                    {/* CTA Button */}
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-10 block w-full px-6 py-3.5 sm:py-4 bg-gradient-to-r ${resource.color} text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group-hover:animate-pulse overflow-hidden`}
                    >
                      {/* Button Shimmer */}
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Visit Now
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 perspective-1000">
            {filteredCategories.map((card, idx) => (
              <div
                key={idx}
                className="animate-card-entrance preserve-3d group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Card Container with 3D Effect */}
                <div className="relative h-full">
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:blur-md`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-white group-hover:-translate-y-2 group-hover:scale-[1.02] overflow-hidden h-full flex flex-col">
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
                      <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${card.color} opacity-10 rounded-full blur-2xl -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700`}></div>
                    </div>

                    {/* Shimmer Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-2xl">
                      <div className="animate-shimmer absolute inset-0"></div>
                    </div>

                    {/* Card Header */}
                    <div className="relative z-10 mb-5">
                      <div className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${card.color} rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                        {/* Decorative Icon */}
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <h3 className="font-bold text-white text-sm sm:text-base">{card.title}</h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <ul className="space-y-2.5 sm:space-y-3 relative z-10 flex-grow">
                      {card.items.map((item, i) => (
                        <li 
                          key={i}
                          className="transform transition-all duration-300 hover:translate-x-2"
                          style={{ animationDelay: `${(idx * 0.1) + (i * 0.05)}s` }}
                        >
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/item flex items-start gap-2.5 p-2 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-all duration-300"
                          >
                            {/* Numbered Counter */}
                            <span className={`${card.iconColor} mt-0.5 text-xs sm:text-sm font-bold group-hover/item:scale-125 transition-all duration-300 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-sm group-hover/item:shadow-md`}>
                              {i + 1}
                            </span>
                            
                            {/* Link Text */}
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover/item:text-gray-900 group-hover/item:font-semibold transition-all duration-300 leading-relaxed">
                              {item.name}
                            </span>

                            {/* Hover Indicator */}
                            <div className={`ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.color}`}></div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            
            {/* Left Side - Logo and Title */}
            <div className="flex flex-col items-center md:items-start gap-4">
              {/* Complete Logo Image */}
              <div className="w-24 h-24 sm:w-24 sm:h-24 rounded-xl overflow-hidden ">
                <img 
                  src={logo} 
                  alt="GIS Directory Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>

            {/* Center - Credits Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
              {/* Developer */}
              <div className="rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto text-center">
                <p className="text-xs text-cyan-100 uppercase tracking-wide font-semibold mb-1.5">
                  Developed By
                </p>
                <h3 className="text-xl font-bold text-white mb-1.5">
                  Rohit Rajput
                </h3>
              </div>

              {/* Inspiration */}
              <div className="rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto text-center">
                <p className="text-xs text-pink-100 uppercase font-semibold mb-1.5 tracking-wide">
                  Inspired By
                </p>
                <h3 className="text-xl font-bold text-white">
                  Rakesh Chauhan Sir
                </h3>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-slate-700">
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

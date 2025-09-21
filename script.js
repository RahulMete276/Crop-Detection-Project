 
        // Disease and medicine database
        const diseaseDatabase = {
            'late_blight': {
                name: 'Late Blight',
                image:'Chlorothalonil.jpeg',
                confidence: '95%',
                description: 'A devastating fungal disease caused by Phytophthora infestans that affects tomatoes and potatoes. It can destroy entire crops within days under favorable conditions.',
                causalAgent: 'Phytophthora infestans',
                affectedCrops: 'Tomatoes, Potatoes',
                symptoms: [
                    'Dark, water-soaked lesions on leaves',
                    'White fuzzy growth on undersides of leaves',
                    'Brown, rotting lesions on stems and fruits',
                    'Rapid wilting and plant collapse'
                ],
                treatment: {
                    chemical: 'Apply fungicides containing chlorothalonil, mancozeb, or metalaxyl.',
                    organic: 'Use copper-based fungicides or neem oil sprays.',
                    cultural: 'Remove infected plants immediately and improve air circulation.'
                },
                prevention: [
                    'Plant disease-resistant varieties',
                    'Ensure proper spacing between plants',
                    'Avoid overhead watering',
                    'Practice crop rotation'
                ],
                medicines: [
                    {
                        name: 'Chlorothalonil',
                        type: 'Fungicide',
                        description: 'Broad-spectrum protectant fungicide effective against late blight',
                        image: 'Late Blight.jpg',
                        dosage: '2-3 teaspoons per gallon of water, apply every 7-10 days',
                        precautions: 'Wear protective clothing, do not apply in windy conditions'
                    },
                    {
                        name: 'Copper Fungicide',
                        type: 'Organic Fungicide',
                        description: 'Natural fungicide suitable for organic farming',
                        image: 'Copper Fungicide.webp',
                        dosage: '1-2 tablespoons per gallon, apply weekly',
                        precautions: 'Can cause leaf burn in hot weather, apply in early morning'
                    },
                    {
                        name: 'Mancozeb',
                        type: 'Protectant Fungicide',
                        description: 'Multi-site contact fungicide with protective action',
                        image: 'Mancozeb.webp',
                        dosage: '1.5-2 teaspoons per gallon, apply every 7 days',
                        precautions: 'Do not apply within 14 days of harvest'
                    }
                
                    
                ]
            },
            'powdery_mildew': {
                name: 'Powdery Mildew',
                confidence: '92%',
                description: 'A common fungal disease that appears as white powdery spots on leaves, stems, and flowers. It affects a wide range of crops and can reduce yield significantly.',
                causalAgent: 'Various fungi (Erysiphales)',
                affectedCrops: 'Cucurbits, Grapes, Roses, Wheat',
                symptoms: [
                    'White powdery coating on leaf surfaces',
                    'Yellowing and curling of affected leaves',
                    'Stunted plant growth',
                    'Reduced fruit production and quality'
                ],
                treatment: {
                    chemical: 'Apply systemic fungicides like myclobutanil or triadimefon.',
                    organic: 'Use neem oil, potassium bicarbonate, or milk sprays.',
                    cultural: 'Prune affected areas and improve air circulation.'
                },
                prevention: [
                    'Choose resistant plant varieties',
                    'Ensure proper spacing for air circulation',
                    'Avoid overhead irrigation',
                    'Maintain optimal humidity levels'
                ],
                medicines: [
                    {
                        name: 'Neem Oil',
                        type: 'Organic Fungicide',
                        description: 'Natural oil with fungicidal and insecticidal properties',
                        image: 'powdery mildew  images.jpg',
                        dosage: '2 tablespoons per gallon of water, apply every 7-14 days',
                        precautions: 'Do not apply in full sun, can harm beneficial insects'
                    },
                    {
                        name: 'Sulfur Fungicide',
                        type: 'Protectant Fungicide',
                        description: 'Traditional fungicide effective against powdery mildew',
                        image: 'Sulfur Fungicide.webp',
                        dosage: '1-2 tablespoons per gallon, apply weekly',
                        precautions: 'Do not apply when temperatures exceed 90°F'
                    },
                    {
                        name: 'Potassium Bicarbonate',
                        type: 'Organic Fungicide',
                        description: 'Contact fungicide that alters pH on leaf surface',
                        image: 'Potassium Bicarbonate.webp',
                        dosage: '1 tablespoon per gallon, apply every 7 days',
                        precautions: 'Test on small area first, may cause leaf burn'
                    }
                    
                ]
            },
            'bacterial_leaf_spot': {
                name: 'Bacterial Leaf Spot',
                image: 'Copper Hydroxide.jpg',
                confidence: '88%',
                description: 'A bacterial infection causing water-soaked spots that turn brown or black on leaves. It can lead to significant yield losses in susceptible crops.',
                causalAgent: 'Xanthomonas campestris',
                affectedCrops: 'Peppers, Tomatoes, Cabbage, Citrus',
                symptoms: [
                    'Small, water-soaked spots on leaves',
                    'Spots turn brown or black with yellow halos',
                    'Leaf drop in severe cases',
                    'Fruit spotting and deformation'
                ],
                treatment: {
                    chemical: 'Apply copper-based bactericides or streptomycin.',
                    organic: 'Use copper sprays and biocontrol agents.',
                    cultural: 'Remove infected plants and practice crop rotation.'
                },
                prevention: [
                    'Use disease-free seeds and transplants',
                    'Avoid working with plants when wet',
                    'Implement crop rotation',
                    'Sanitize tools between uses'
                ],
                medicines: [
                    {
                        name: 'Copper Hydroxide',
                        type: 'Bactericide',
                        description: 'Effective against bacterial diseases in crops',
                        image: 'bacterial leaf spot.png',
                        dosage: '2-3 teaspoons per gallon, apply every 7-10 days',
                        precautions: 'Can accumulate in soil, use rotation'
                    },
                    {
                        name: 'Streptomycin',
                        type: 'Antibiotic',
                        description: 'Antibiotic treatment for severe bacterial infections',
                        image: 'Streptomycin.webp',
                        dosage: '1 teaspoon per gallon, apply as directed',
                        precautions: 'Use only as last resort, resistance can develop'
                    },
                    {
                        name: 'Bacillus subtilis',
                        type: 'Biocontrol',
                        description: 'Beneficial bacteria that fights plant pathogens',
                        image: 'Bacillus subtilis.webp',
                        dosage: 'Follow label instructions, apply preventively',
                        precautions: 'Store in cool place, use before expiration'
                    }
                ]
            }
        };

        // Medicine details database
        const medicineDetails = {
            'chlorothalonil': {
                name: 'Chlorothalonil',
                description: 'Chlorothalonil is a broad-spectrum organochlorine fungicide used to control fungi that threaten vegetables, trees, small fruits, turf, ornamentals, and other agricultural crops. It also controls fungi that cause diseases in crops like potatoes, tomatoes, and peanuts.',
                usage: 'Mix 2-3 teaspoons of Chlorothalonil per gallon of water. Apply as a foliar spray, ensuring complete coverage of all plant surfaces. Repeat application every 7-10 days or after heavy rain. Do not apply more than 7 times per season.',
                precautions: 'Wear protective clothing including gloves, long sleeves, and eye protection when handling. Avoid inhalation of spray mist. Do not apply in windy conditions to prevent drift. Do not apply within 7 days of harvest for most crops. Keep out of reach of children and pets.',
                image: 'Chlorothalonil.jpeg'
            },
            'neem_oil': {
                name: 'Neem Oil',
                description: 'Neem oil is a naturally occurring pesticide found in seeds from the neem tree. It is yellow to brown, has a bitter taste, and a garlic/sulfur smell. It has been used for hundreds of years to control pests and diseases.',
                usage: 'Mix 2 tablespoons of neem oil per gallon of water. Add a few drops of mild liquid soap to help the oil mix with water. Shake well before use. Spray all plant surfaces thoroughly. Apply every 7-14 days or as needed. Best applied in early morning or late evening.',
                precautions: 'Test on a small area of the plant first to check for sensitivity. Do not apply in full sun as it can cause leaf burn. Avoid spraying beneficial insects like bees when they are actively foraging. Keep out of reach of children and pets. Store in a cool, dark place.',
                image: 'Neem Oil.png'
            },
            'copper_fungicide': {
                name: 'Copper Fungicide',
                description: 'Copper fungicides are inorganic compounds used to control fungal and bacterial diseases in plants. They have been used for over a century and are approved for organic farming. Copper ions denature proteins and enzymes in fungal and bacterial cells.',
                usage: 'Mix 1-2 tablespoons of copper fungicide per gallon of water. Apply as a protective spray before disease appears or at first sign of disease. Repeat every 7-10 days. Do not apply more than 12 times per season. Avoid application during hot weather.',
                precautions: 'Can cause leaf burn if applied in hot weather or at high concentrations. Wear protective clothing when handling. Do not apply within 24 hours of rain. Can be toxic to fish and aquatic organisms. Do not contaminate water sources. Keep out of reach of children and pets.',
                image: 'Copper Fungicide.webp'
            },
            'mancozeb': {
                name: 'Mancozeb',
                description: 'Mancozeb is a broad-spectrum contact fungicide with protective action. It is a mixture of maneb and zineb. It is used to protect many fruit, vegetable, nut, and field crops against a wide spectrum of fungal diseases.',
                usage: 'Mix 1.5-2 teaspoons of Mancozeb per gallon of water. Apply as a foliar spray when disease first appears or when conditions favor disease development. Repeat every 7 days. Do not apply more than 8 times per season. Do not apply within 14 days of harvest.',
                precautions: 'Wear protective clothing including gloves, long sleeves, and eye protection. Avoid inhalation of dust or spray mist. Do not apply in windy conditions. Can be harmful if swallowed or inhaled. Keep out of reach of children and pets. Do not contaminate water sources.',
                image: 'Mancozeb.webp'
            },
            'sulfur_fungicide': {
                name: 'Sulfur Fungicide',
                description: 'Sulfur is one of the oldest fungicides and has been used for centuries to control fungal diseases. It works by inhibiting fungal spore germination and is effective against powdery mildew, rust, and other fungal diseases.',
                usage: 'Mix 1-2 tablespoons of sulfur fungicide per gallon of water. Apply as a spray when disease first appears or when conditions favor disease development. Repeat every 7-10 days. Do not apply more than 12 times per season.',
                precautions: 'Do not apply when temperatures exceed 90°F (32°C) as it can cause leaf burn. Wear protective clothing when handling. Avoid inhalation of dust. Can be toxic to beneficial insects. Keep out of reach of children and pets.',
                image: 'Sulfur Fungicide.webp'
            },
            'potassium_bicarbonate': {
                name: 'Potassium Bicarbonate',
                description: 'Potassium bicarbonate is a contact fungicide that works by altering the pH on the leaf surface, creating an environment where fungal spores cannot germinate. It is approved for organic farming and is effective against powdery mildew.',
                usage: 'Mix 1 tablespoon of potassium bicarbonate per gallon of water. Add a few drops of mild liquid soap to help the solution stick to leaves. Apply when disease first appears. Repeat every 7 days or after rain.',
                precautions: 'Test on a small area of the plant first to check for sensitivity. Can cause leaf burn if applied in hot weather or at high concentrations. Wear protective clothing when handling. Keep out of reach of children and pets.',
                image: 'Potassium Bicarbonate.webp'
            },
            'copper_hydroxide': {
                name: 'Copper Hydroxide',
                description: 'Copper hydroxide is a protectant fungicide/bactericide used to control a wide range of fungal and bacterial diseases in fruits, vegetables, and ornamentals. It forms a protective barrier on plant surfaces.',
                usage: 'Mix 2-3 teaspoons of copper hydroxide per gallon of water. Apply as a protective spray before disease appears or at first sign of disease. Repeat every 7-10 days. Do not apply more than 12 times per season.',
                precautions: 'Can cause leaf burn if applied in hot weather or at high concentrations. Wear protective clothing when handling. Do not apply within 24 hours of rain. Can be toxic to fish and aquatic organisms. Do not contaminate water sources. Keep out of reach of children and pets.',
                image: 'Copper Hydroxide.jpg'
            },
            'streptomycin': {
                name: 'Streptomycin',
                description: 'Streptomycin is an antibiotic used to control bacterial diseases in plants. It works by inhibiting protein synthesis in bacterial cells, effectively stopping bacterial growth and reproduction.',
                usage: 'Mix 1 teaspoon of streptomycin per gallon of water. Apply as a spray when bacterial disease first appears. Repeat every 5-7 days. Do not apply more than 3 times per season. Do not apply within 30 days of harvest.',
                precautions: 'Use only as a last resort when other methods have failed. Resistance can develop with repeated use. Wear protective clothing when handling. Keep out of reach of children and pets. Do not use on edible crops close to harvest.',
                image: 'Streptomycin.webp'
            },
            'bacillus_subtilis': {
                name: 'Bacillus subtilis',
                description: 'Bacillus subtilis is a beneficial bacterium used as a biocontrol agent against plant pathogens. It works by colonizing plant surfaces and producing antibiotics that inhibit the growth of harmful bacteria and fungi.',
                usage: 'Mix according to label instructions (usually 1-2 teaspoons per gallon of water). Apply as a preventive spray before disease appears. Repeat every 7-14 days. Can be applied up to day of harvest for most crops.',
                precautions: 'Store in a cool, dry place. Do not use with chemical fungicides or bactericides. Apply in early morning or late evening. Keep out of reach of children and pets. Use before expiration date.',
                image: 'Bacillus subtilis.webp'
            },
            'imidacloprid': {
                name: 'Imidacloprid',
                description: 'Imidacloprid is a systemic insecticide belonging to the neonicotinoid class. It is highly effective against sucking and chewing insects such as aphids, whiteflies, thrips, and certain beetles.',
                usage: 'Mix 0.5-1 teaspoon of Imidacloprid per gallon of water. Apply as a foliar spray or soil drench. Repeat applications as needed, but do not exceed maximum seasonal application rates.',
                precautions: 'Toxic to bees and other pollinators. Do not apply during bloom or when bees are actively foraging. Wear protective clothing and follow label instructions carefully.',
                image: 'Imidacloprid.webp'
            },
            'glyphosate': {
                name: 'Glyphosate',
                description: 'Glyphosate is a broad-spectrum systemic herbicide used to kill weeds, especially annual broadleaf weeds and grasses. It works by inhibiting the enzyme EPSP synthase, which is essential for plant growth.',
                usage: 'Mix 2-3 ounces of Glyphosate per gallon of water. Apply as a directed spray to actively growing weeds. Do not apply to desirable plants or crops.',
                precautions: 'Non-selective herbicide - will kill any plant it contacts. Avoid spray drift to desirable plants. Do not apply near water sources or in windy conditions.',
                image: 'Glyphosate.webp'
            },
            'pyrethrin': {
                name: 'Pyrethrin',
                description: 'Pyrethrin is a natural insecticide derived from chrysanthemum flowers. It is effective against a wide range of insect pests and breaks down quickly in the environment.',
                usage: 'Mix 1-2 tablespoons of Pyrethrin per gallon of water. Apply as a foliar spray when insects are present. Repeat applications as needed, but do not exceed label rates.',
                precautions: 'Toxic to fish and aquatic invertebrates. Do not apply near water sources. Harmful to beneficial insects, so apply when pollinators are not active.',
                image: 'Pyrethrin.png'
            }
            
        };

        // Global variables
        let currentDisease = null;

        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Function to create disease gallery
        function generateDiseaseGallery() {
            const container = document.getElementById('diseaseGalleryContainer');
            container.innerHTML = '';

            Object.keys(diseaseDatabase).forEach(key => {
                const disease = diseaseDatabase[key];
                
                const card = document.createElement('div');
                card.className = 'flip-card';
                card.onclick = function() { flipCard(this); };

                card.innerHTML = `
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${disease.medicines[0].image}" alt="${disease.name}" class="card-image">
                            <div class="card-title">${disease.name}</div>
                            <div class="flip-hint">Click to flip <i class="fas fa-sync-alt"></i></div>
                        </div>
                        <div class="flip-card-back">
                            <div class="back-header">
                                <h2 class="back-title">${disease.name}</h2>
                                <i class="fas fa-virus back-icon"></i>
                            </div>
                            
                            <div class="info-section">
                                <h3 class="section-title"><i class="fas fa-info-circle"></i> Description</h3>
                                <p class="info-content">${disease.description}</p>
                            </div>
                            
                            <div class="info-section">
                                <h3 class="section-title"><i class="fas fa-pills"></i> Medicine Effects</h3>
                                <div class="medicine-effects">
                                    ${disease.medicines.map(med => `
                                        <div class="effect-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span><strong>${med.name}:</strong> ${med.description}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="info-section">
                                <h3 class="section-title"><i class="fas fa-leaf"></i> Affected Crops</h3>
                                <p class="info-content">${disease.affectedCrops}</p>
                            </div>
                            
                            <div class="info-section">
                                <h3 class="section-title"><i class="fas fa-shield-alt"></i> Prevention</h3>
                                <ul class="info-content">
                                    ${disease.prevention.map(tip => `
                                        <li class="mb-1"><i class="fas fa-check text-green-500 mr-2"></i>${tip}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        }

        // Function to flip card
        function flipCard(card) {
            card.classList.toggle('flipped');
        }

        // Initialize disease gallery when page loads
        document.addEventListener('DOMContentLoaded', function() {
            generateDiseaseGallery();
        });

        // Handle drag and drop
        function handleDragOver(e) {
            e.preventDefault();
            e.currentTarget.classList.add('border-green-500', 'bg-green-50');
        }

        function handleDrop(e) {
            e.preventDefault();
            e.currentTarget.classList.remove('border-green-500', 'bg-green-50');
            
            const files = e.dataTransfer.files;
            if (files.length > 0 && files[0].type.startsWith('image/')) {
                processImage(files[0]);
            }
        }

        // Handle image upload
        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                processImage(file);
            }
        }

        // Process uploaded image
        function processImage(file) {
            // Show loading state
            document.getElementById('loadingState').classList.remove('hidden');
            document.getElementById('resultsSection').classList.add('hidden');

            // Simulate disease detection
            setTimeout(() => {
                // Randomly select a disease for demo
                const diseases = Object.keys(diseaseDatabase);
                const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
                currentDisease = diseaseDatabase[randomDisease];
                
                displayDiseaseInfo();
                document.getElementById('loadingState').classList.add('hidden');
                document.getElementById('resultsSection').classList.remove('hidden');
                
                // Scroll to results
                document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        }

        // Display disease information
        function displayDiseaseInfo() {
            if (!currentDisease) return;

            // Update overview tab
            document.getElementById('diseaseName').textContent = currentDisease.name;
            document.getElementById('confidence').textContent = currentDisease.confidence;
            document.getElementById('diseaseDescription').textContent = currentDisease.description;
            document.getElementById('causalAgent').textContent = currentDisease.causalAgent;
            document.getElementById('affectedCrops').textContent = currentDisease.affectedCrops;

            // Update symptoms
            const symptomsList = document.getElementById('symptomsList');
            symptomsList.innerHTML = currentDisease.symptoms.map(symptom => `
                <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>${symptom}</span>
                </li>
            `).join('');

            // Update treatment
            const treatmentContent = document.getElementById('treatmentContent');
            treatmentContent.innerHTML = `
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h5 class="font-semibold mb-2">Chemical Control</h5>
                    <p class="text-gray-700">${currentDisease.treatment.chemical}</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                    <h5 class="font-semibold mb-2">Organic Treatment</h5>
                    <p class="text-gray-700">${currentDisease.treatment.organic}</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg">
                    <h5 class="font-semibold mb-2">Cultural Control</h5>
                    <p class="text-gray-700">${currentDisease.treatment.cultural}</p>
                </div>
            `;

            // Update prevention
            const preventionList = document.getElementById('preventionList');
            preventionList.innerHTML = currentDisease.prevention.map(tip => `
                <li class="flex items-start">
                    <i class="fas fa-shield-alt text-green-500 mt-1 mr-2"></i>
                    <span>${tip}</span>
                </li>
            `).join('');

            // Update medicines
            const medicinesContainer = document.getElementById('medicinesContainer');
            medicinesContainer.innerHTML = currentDisease.medicines.map(medicine => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="${medicine.image}" alt="${medicine.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">${medicine.name}</h3>
                        <p class="text-gray-600 text-sm mb-3">${medicine.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-green-600 font-semibold">${medicine.type}</span>
                            <button onclick="openMedicineModal('${medicine.name.toLowerCase().replace(' ', '_')}')" class="text-green-600 hover:text-green-700">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Tab switching function
        function switchTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            // Remove active class from all tab buttons
            document.querySelectorAll('.tab-active').forEach(tab => {
                tab.classList.remove('tab-active');
                tab.classList.add('text-gray-500', 'hover:text-green-600');
            });
            
            // Show selected tab content
            document.getElementById(tabName).classList.remove('hidden');
            
            // Add active class to clicked tab button
            event.target.classList.add('tab-active');
            event.target.classList.remove('text-gray-500', 'hover:text-green-600');
        }

        // Medicine modal functions
        function openMedicineModal(medicineId) {
            const medicine = medicineDetails[medicineId];
            if (!medicine) return;
            
            document.getElementById('medicineModalTitle').textContent = medicine.name;
            document.getElementById('medicineModalImage').src = medicine.image;
            document.getElementById('medicineModalDescription').textContent = medicine.description;
            document.getElementById('medicineModalUsage').textContent = medicine.usage;
            document.getElementById('medicineModalPrecautions').textContent = medicine.precautions;
            
            document.getElementById('medicineModal').classList.remove('hidden');
        }

        function closeMedicineModal() {
            document.getElementById('medicineModal').classList.add('hidden');
        }

        // Support modal functions
        function openSupportModal() {
            document.getElementById('supportModal').classList.remove('hidden');
        }

        function closeSupportModal() {
            document.getElementById('supportModal').classList.add('hidden');
        }

        // About modal functions
        function openAboutModal() {
            document.getElementById('aboutModal').classList.remove('hidden');
        }

        function closeAboutModal() {
            document.getElementById('aboutModal').classList.add('hidden');
        }
    
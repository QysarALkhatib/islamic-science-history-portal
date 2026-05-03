/**
 * Islamic Scientific Heritage - Main JavaScript
 */

// ============================================
// Chatbot Functionality (UI Ready)
// ============================================

const chatbotFab = document.getElementById('chatbotFab');
const chatbotPanel = document.getElementById('chatbotPanel');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

// Toggle Chatbot Panel
chatbotFab.addEventListener('click', () => {
    chatbotPanel.classList.toggle('open');
    if (chatbotPanel.classList.contains('open')) {
        chatInput.focus();
    }
});

chatClose.addEventListener('click', () => {
    chatbotPanel.classList.remove('open');
});

// Suggested Questions Handler
document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const question = chip.getAttribute('data-question');
        addUserMessage(question);
    });
});

// Send Message Handler
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Enable send button when typing
chatInput.addEventListener('input', () => {
    chatSend.style.opacity = chatInput.value.trim() ? '1' : '0.5';
});

// Send Message Function
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addUserMessage(message);
        chatInput.value = '';
        chatSend.style.opacity = '0.5';
    }
}

// Add User Message
function addUserMessage(text) {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + 
                 now.getMinutes().toString().padStart(2, '0');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
            <span class="message-time">${time}</span>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate bot response
    setTimeout(() => {
        removeTypingIndicator();
        addBotResponse(text);
    }, 1500);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add Bot Response
function addBotResponse(userMessage) {
    const response = getBotResponse(userMessage);
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + 
                 now.getMinutes().toString().padStart(2, '0');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <svg viewBox="0 0 32 32" width="32" height="32">
                <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="1"/>
                <path d="M10 24 Q16 12 22 24" fill="none" stroke="currentColor" stroke-width="1"/>
            </svg>
        </div>
        <div class="message-content">
            <p>${response}</p>
            <span class="message-time">${time}</span>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Typing Indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <svg viewBox="0 0 32 32" width="32" height="32">
                <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="1"/>
                <path d="M10 24 Q16 12 22 24" fill="none" stroke="currentColor" stroke-width="1"/>
            </svg>
        </div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// Bot Response Logic (Pre-built UI Demo)
function getBotResponse(question) {
    const q = question.toLowerCase();
    
    if (q.includes('جبر') || q.includes('خوارزم')) {
        return 'الخوارزمي (780-850م) هو أبو علم الجبر. وضع أسسه في كتابه "المختصر في حساب الجبر والمقابلة"، وكلمة Algebra مشتقة من "الجبر" في اسمه.';
    }
    if (q.includes('ابن سينا') || q.includes('سينا')) {
        return 'ابن سينا (980-1037م) من أعظم الأطباء في التاريخ. ألّف "القانون في الطب" الذي ظل مرجعاً أساسياً في أوروبا لخمسة قرون حتى القرن الـ 17.';
    }
    if (q.includes('هيثم') || q.includes('بصريات') || q.includes('ضوء')) {
        return 'ابن الهيثم (965-1040م) أبو البصريات الحديثة. أثبت أن الضوء يأتي من الأجسام إلى العين وليس العكس، وأسّس المنهج التجريبي.';
    }
    if (q.includes('رازي') || q.includes('جدري') || q.includes('حصبة')) {
        return 'الرازي (854-925م) أول من فرق بين الجدري والحصبة بشكل علمي. أسّس أول مستشفى نفسي في التاريخ.';
    }
    if (q.includes('بيروني') || q.includes('أرض') || q.includes('محيط')) {
        return 'البيروني (973-1048م) حسب محيط الأرض بدقة مذهلة (39,000 كم) قريبة جداً من القيمة الحقيقية.';
    }
    if (q.includes('جابر') || q.includes('كيمياء')) {
        return 'جابر بن حيان (721-815م) أبو الكيمياء. اخترع جهاز التقطير وطور الأحماض النقية، وفن التقليل والتحليل.';
    }
    if (q.includes('طب') || q.includes('طبيب')) {
        return 'الطب الإسلامي من أعظم إنجازات العصر الذهبي! من أبرز المساهمات: فرق الرازي بين الجدري والحصبة، جراحة الزهراوي، قانون ابن سينا.';
    }
    if (q.includes('فلك') || q.includes('نجوم') || q.includes('نجمة')) {
        return 'علم الفلك الإسلامي ازدهر في مراصد مثل مرصد سامراء. أنشأ البيروني كتالوج نجوم من 1437 نجمة بدقة عالية.';
    }
    if (q.includes('وقت') || q.includes('العصر الذهبي') || q.includes('متى')) {
        return 'العصر الذهبي الإسلامي يمتد من القرن الثامن إلى الرابع عشر الميلادي، مع قمة الإنتاج في الفترة 750-1250م.';
    }
    if (q.includes('بيت') || q.includes('حكمة')) {
        return 'بيت الحكمة في بغداد أسسه المنصور عام 762م، وأصبح أكبر مكتبة في العالم آنذاك، ترجم فيها اليونانية والفارسية والسنسكريتية.';
    }
    if (q.includes('شكر') || q.includes('thanks')) {
        return 'شكراً لك! يسعدني مساعدتك في استكشاف التراث العلمي الإسلامي. هل لديك سؤال آخر؟';
    }
    if (q.includes('مرحبا') || q.includes('اهلا') || q.includes('hi') || q.includes('hello')) {
        return 'أهلاً وسهلاً! أنا عالم Scholar Bot، مساعدك في التراث العلمي الإسلامي. كيف يمكنني مساعدتك؟';
    }
    
    // Default response
    return 'سؤال رائع! يمكنك معرفة المزيد من خلال استكشاف أقسام العلماء والعلوم في الموقع. جرب أن تسأل عن: الخوارزمي، ابن سينا، ابن الهيثم، أو الطب والفلك.';
}

// ============================================
// Scholar Modal
// ============================================

const scholarsData = {
    'alkhwarizmi': {
        name: 'محمد بن موسى الخوارزمي',
        period: 'الرياضيات | 780-850م',
        bio: `
            <h3>محمد بن موسى الخوارزمي</h3>
            <p>يُعدّ الخوارزمي من أعظم علماء الرياضيات في التاريخ. وُلد في خوارزم (أوزبكستان حالياً) وعاش في بغداد حيث عمل في بيت الحكمة.</p>
            <h4>إنجازاته الرئيسية:</h4>
            <ul>
                <li>أسّس علم الجبر وحله المعادلات من الدرجة الأولى والثانية</li>
                <li>أسّس مفهوم الخوارزميات (Algorithm) وطوّرها</li>
                <li>طور نظام الأرقام العربية الهندية (0-9)</li>
                <li>أدخل نظام الأرقام مكان نظام الأبجدية الرومانية</li>
                <li>أنشأ جداول فلكية دقيقة أثّرت على علم الفلك الأوروبي</li>
            </ul>
            <p>كلمة "Algebra" مشتقة من كتابه "الجبر والمقابلة"، وكلمة "Algorithm" من اسمه.</p>
        `
    },
    'ibnsina': {
        name: 'ابن سينا (أبو علي الحسين)',
        period: 'الطب والفلسفة | 980-1037م',
        bio: `
            <h3>ابن سينا</h3>
            <p>يُلقّب بالشيخ الرئيس، وهو من أكثر العلماء تأثيراً في التاريخ. كتب ما يزيد عن 450 عملاً في الطب والفلسفة والعلوم.</p>
            <h4>إنجازاته الرئيسية:</h4>
            <ul>
                <li>ألّف "القانون في الطب" - أعيد طبعه أكثر من 30 مرة في أوروبا</li>
                <li>وصف الأمراض المعدية ووسائل انتشارها</li>
                <li>فرق بين التهاب السحايا وأمراض أخرى</li>
                <li>وصف بدقة تشريح العين والأذن</li>
                <li>طور منهجاً تجريبياً في الطب</li>
            </ul>
            <p>يُعتبر كتابه "القانون" المرجع الطبي الأساسي في أوروبا حتى القرن الـ 17.</p>
        `
    },
    'ibnalhaytham': {
        name: 'ابن الهيثم (أبو علي الحسن)',
        period: 'البصريات والفيزياء | 965-1040م',
        bio: `
            <h3>ابن الهيثم</h3>
            <p>يُلقّب بأبي البصريات الحديثة. هو أول من أثبت أن الضوء يأتي من الأجسام إلى العين وليس العكس.</p>
            <h4>إنجازاته الرئيسية:</h4>
            <ul>
                <li>أسّس المنهج التجريبي الصارم في العلم</li>
                <li>شرح آليات الرؤية وظاهرة الانعكاس والانكسار</li>
                <li>اخترع الغرفة المظلمة (كاميرا_obscura) لدراسة الضوء</li>
                <li>حلل العدسات وأصلح صناعة النظارات</li>
                <li>وضع أسس فيزياء الضوء وعلم البصريات</li>
            </ul>
            <p>يؤثر عمله على أجهزة التصوير والعدسات حتى اليوم.</p>
        `
    },
    'alrazi': {
        name: 'أبو بكر الرازي',
        period: 'الطب والكيمياء | 854-925م',
        bio: `
            <h3>أبو بكر الرازي</h3>
            <p>يُعدّ من أعظم الأطباء في التاريخ الإسلامي. أسّس أول مستشفى نظامي في الرافقة ببغداد.</p>
            <h4>إنجازاته الرئيسية:</h4>
            <ul>
                <li>أول من فرّق علمياً بين الجدري والحصبة</li>
                <li>أنشأ أول مستشفى للأمراض النفسية في التاريخ</li>
                <li>ألّف "الحاوي" موسوعة طبية من 23 مجلداً</li>
                <li>استخدم الرحى المعوية والقطن في الجراحة</li>
                <li>طوّر أدوات طبية جديدة</li>
            </ul>
            <p>يُعتبر مؤسس علم النفس الحديث.</p>
        `
    },
    'albiruni': {
        name: 'أبو الريحان البيروني',
        period: 'العلوم المتعددة | 973-1048م',
        bio: `
            <h3>أبو الريحان البيروني</h3>
            <p>عالم موسوعي أسهم في الرياضيات والفيزياء والفلك والجغرافيا والتاريخ. تكلم عدة لغات ودرس الحضارات المختلفة.</p>
            <h4>إنجازاته الرئيسية:</h4>
            <ul>
                <li>حساب محيط الأرض بدقة (39,000 كم) - قريب جداً من الحقيقة</li>
                <li>أنشأ كتالوج نجوم من 1437 نجمة</li>
                <li>درس العلوم والفلسفة الهندية</li>
                <li>طوّر طرقاً جديدة لقياس الجغرافيا</li>
                <li>وضع نظريات في الجاذبية والحركة</li>
            </ul>
            <p>يعدّ من أوائل العلماء الذين استخدموا المنهج المقارن.</p>
        `
    },
    'jabir': {
        name: 'جابر بن حيان',
        period: 'الكيمياء | 721-815م',
        bio: `
            <h3>جابر بن حيان</h3>
            <p>يُلقّب بأبي الكيمياء. أسّس علم الكيمياء كعلم تجريبي منظّم.</p>
            <h4>إنجازاته الرئيسية:</h4>
            <ul>
                <li>اخترع أجهزة التقطير والفلترة والتسخين</li>
                <li>أنتج أول أحماض كيميائية نقية</li>
                <li>طوّر ملح الأمونيوم (النشادر)</li>
                <li>صنع أول صابون صلب</li>
                <li>صنع الكحول الطبي (الروح)</li>
            </ul>
            <p>طوّر منهج "التقليل" (الاختزال) الذي يستخدم حتى اليوم.</p>
        `
    }
};

function openScholarModal(scholarId) {
    const modal = document.getElementById('scholarModal');
    const data = scholarsData[scholarId];
    
    if (data) {
        document.getElementById('modalName').textContent = data.name;
        document.getElementById('modalPeriod').textContent = data.period;
        document.getElementById('modalBody').innerHTML = data.bio;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeScholarModal() {
    document.getElementById('scholarModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('scholarModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeScholarModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeScholarModal();
        chatbotPanel.classList.remove('open');
    }
});

// ============================================
// Science Tabs
// ============================================

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // Add active to clicked button
        btn.classList.add('active');
        
        // Hide all panels
        document.querySelectorAll('.science-panel').forEach(p => p.classList.remove('active'));
        // Show target panel
        const targetId = btn.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
    });
});

// ============================================
// Smooth Scroll for Navigation
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and scholar cards
document.querySelectorAll('.feature-card, .scholar-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// ============================================
// Language Toggle (Demo)
// ============================================

const langToggle = document.getElementById('langToggle');
let isArabic = true;

langToggle.addEventListener('click', () => {
    isArabic = !isArabic;
    langToggle.textContent = isArabic ? 'EN' : 'عربي';
    
    // In a full implementation, this would switch all text
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
});

// ============================================
// Scroll Progress Indicator (Optional)
// ============================================

const heroSection = document.querySelector('.hero');
let scrolled = false;

window.addEventListener('scroll', () => {
    if (!scrolled && window.scrollY > 100) {
        scrolled = true;
        document.body.classList.add('scrolled');
    } else if (scrolled && window.scrollY <= 100) {
        scrolled = false;
        document.body.classList.remove('scrolled');
    }
});

// ============================================
// Add CSS for animations
// ============================================

const style = document.createElement('style');
style.textContent = `
    .feature-card, .scholar-card, .timeline-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .typing-dots {
        display: flex;
        gap: 4px;
        padding: 5px;
    }
    
    .typing-dots span {
        width: 8px;
        height: 8px;
        background: var(--primary);
        border-radius: 50%;
        animation: typingBounce 1.4s ease-in-out infinite;
    }
    
    .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
    
    @keyframes typingBounce {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-6px); }
    }
`;
document.head.appendChild(style);

// ============================================
// Initialize
// ============================================

console.log('🕌 Islamic Scientific Heritage Portal Loaded');
console.log('✨ Features: Timeline, Scholars Gallery, Sciences, Chatbot UI');

// Add page loaded animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
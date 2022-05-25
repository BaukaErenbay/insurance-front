import React, {Fragment} from "react"

const languages = {
	title: {
		ru: "«INSURANCE» — рады вам всегда",
		en: "Insurance — the best service in Antalya and affordable transfer prices",
		tr: "Insurance — Antalyada en iyi hizmet ve uygun araç transfer fiyatları",
	},
	firstScreenTitle: {
		ru: "«INSURANCE» — рады вам всегда",
		en: "Insurance — the best service in Antalya and affordable transfer prices",
		tr: "Insurance — Antalyada en iyi hizmet ve uygun araç transfer fiyatları",
	},
	from: {
		ru: "Откуда",
		en: "From",
		tr: "Nereden",
	},
	to: {
		ru: "Куда",
		en: "To",
		tr: "Nereye",
	},
	when: {
		ru: "Выберите день",
		en: "Choose date",
		tr: "Gün seçin",
	},
	noResults: {
		ru: "Нет результатов",
		en: "No results",
		tr: "Sonuç yok",
	},
	getVariants: {
		ru: "Получить предложения",
		en: "Get offers",
		tr: "Teklifler",
	},
	aboutUs: {
		ru: "О нас",
		en: "About us",
		tr: "Hakkımızda",
	},
	qualityTitle: {
		ru: "Страхование жизни",
		en: "Qualitatively",
		tr: "Kaliteli",
	},
	qualitySubtitle: {
		ru: "Мы можем застраховать вашу жизнь, если этого требуют обстоятельства",
		en: "The most comfortable cars and high quality service",
		tr: "En konforlu arabalar ve kaliteli hizmet",
	},
	economyTitle: {
		ru: "Недвижимость",
		en: "Profitable",
		tr: "Karlı",
	},
	economySubtitle: {
		ru: "Хотите застраховать дом — это к нам",
		en: "We offer the best transfer prices",
		tr: "En uygun transfer fiyatları",
	},
	safeTitle: {
		ru: "Авто",
		en: "Safe",
		tr: "Güvenli",
	},
	safeSubtitle: {
		ru: "Мы страхуем любые виды странспорта",
		en: "Only professional drivers work with us",
		tr: "Bizimle sadece profesyonel sürücüler çalışıyor",
	},
	fastTitle: {
		ru: "Медицинское страхование",
		en: "Fast",
		tr: "Hızlı",
	},
	fastSubtitle: {
		ru: "Ваше здоровье — это наша проблема",
		en: "Order approval in 10 minutes",
		tr: "10 dakikada sipariş onayı",
	},
	aboutUsP1: {
		ru: "Insurance — компания по страхованию широкого спектра услуг. Мы готовы застраховать ваш дом, автомобиль, а также поможем с оформлением медицинской страховки и страхованием жизни.",
		en: "Insurance is a transfer booking company. We provide a wide base of comfortable cars, qualified and experienced drivers, a high level of service, assistance if you have any questions. The most reasonable prices on the coast of Antalya.",
		tr: "Insurance, bir transfer rezervasyon şirketidir. Geniş ve konforlu araç tabanı, nitelikli ve deneyimli sürücüler, üst düzey hizmet vermekteyiz. Bizimle seyahat için endişelenemezsiniz ve seyahatinizin tadını çıkarırsınız — tüm sorularınızla ilgileneceğiz.",
	},
	aboutUsP2: {
		ru: "С нами вы можете не беспокоиться о лишней волоките с документами и бумагами. Все это мы берем на себя!",
		en: "With us, you can not worry about travel and enjoy your trip — we will take care of all the worries.",
		tr: "Bizimle ulaşım ile ilgili bütün endiselerinizi unutup seyahatin tadını çıkarabilirsiniz.",
	},
	reviews: {
		ru: "Отзывы",
		en: "Reviews",
		tr: "Yorumlar",
	},
	name1: {
		ru: "Анна",
		en: "Hanna",
		tr: "Anna",
	},
	comment1: {
		ru: "Лучшие на рынке. Теперь всегда буду обращаться только к вам.",
		en: "We come to Turkey very often, we always use the transfer services of only this company, we are very satisfied, unobtrusive service, the driver is very neat, friendly, arrived on time, the car is clean as always, we drove at a low speed (this is very important for us), complete comfort in general, I recommend to everyone.",
		tr: "Türkiye'ye çok sık geliyoruz ve her zaman sadece bu firmanın transfer hizmetlerini kullanıyoruz. Çok memnunuz: servis ve hizmet üst duzeyde, çalışanlar güler yüzlü. Şoför zamanında geldi, araç her zamanki gibi temizdi, şoför düşük hızda sürdü (bu bizim için çok önemlidir), her zamanki gibi yolculuk çok konforlu geçti. Herkese tavsiye ederim.",
	},
	name2: {
		ru: "Милана",
		en: "Milena",
		tr: "Milena",
	},
	comment2: {
		ru: "Спасибо огромное!!! Застраховала свое авто быстро и без лишней валокиты с документами!!!",
		en: "Thank you very much!!! Everything was exactly as ordered, great cars, friendly service. Thanks again, now I will use the services of your company!!!",
		tr: "Çok teşekkür ederim!!! Her şey tam olarak sipariş ettiğimiz gibiydi, arabalar çok iyi, güler yüzlü çalışanlar. Tekrar teşekkürler! Bundan sonra sadece şirketinizin hizmetlerini kullanacağım !!!",
	},
	name3: {
		ru: "Александр",
		en: "Alexander",
		tr: "İskender",
	},
	comment3: {
		ru: "Спасибо большое, помогли сделать мед страховку всегда за 15 минут!!! Молодцы !!!",
		en: "Thank you very much, we met without delay, great car, we will definitely contact you again!!! Well done!!!",
		tr: "Çok teşekkür ederim, şoför gecikmeden geldi, harika bir araba! Kesinlikle sizinle tekrar yolculuk yapacağız!!! Harikasınız!!!",
	},
	name4: {
		ru: "Майкл",
		en: "Michael",
		tr: "Michael",
	},
	comment4: {
		ru: "Обращался в Insurance чтобы застраховать дом. Ребята молодцы, сделали все быстро и качественно.",
		en: "We ordered a transfer to the hotel and to the airport. Everything is fine, on time. Thank you very much.",
		tr: "Otele ve havaalanına transfer sipariş ettik. Her şey yolunda, zamanındaydı. Çok teşekkür ederim!",
	},
	name5: {
		ru: "Анастасия",
		en: "Anastasia",
		tr: "Anastasia",
	},
	comment5: {
		ru: "Никогда бы не подумал, что процесс страхования может быть таким простым. Удивили! Буду обращаться еще.",
		en: "Many thanks to the developers and site administrators. Thank you for the efficient organization of the transfer. Separate respect to the driver.",
		tr: "Geliştiriciler, site yöneticilerine ve şoförlere çok teşekkür ederim. Transferin verimli organizasyonu için ayrı teşekkürler.",
	},
	callback: {
		ru: "Обратный звонок",
		en: "Call back",
		tr: "Geri arama",
	},
	wantDirectCall: {
		ru: "Хотите связаться напрямую?",
		en: "Want to contact directly?",
		tr: "Doğrudan iletişime geçmek mi istiyor musunuz?",
	},
	yourPhone: {
		ru: "Ваш номер",
		en: "You phone number",
		tr: "Numara gir",
	},
	callMeBack: {
		ru: "Перезвоните мне",
		en: "Call me back",
		tr: "Beni ara",
	},
	haveNoTime: {
		ru: (
			<Fragment>
				Нет времени на заполенение форм или хотите обсудить все лично по телефону —{" "}
				<b>закажите обратный звонок</b> и мы перезвоним вам в течение трех минут.
			</Fragment>
		),
		en: (
			<Fragment>
				Have no time to fill out the forms or if you want to discuss everything in person by
				phone — <b>order a call back</b> and we will call you back within three minutes.
			</Fragment>
		),
		tr: (
			<Fragment>
				Formları doldurmak için zamanınız yok ise veya her şeyi telefonda şahsen görüşmek
				istiyorsanız — <b>«beni ara» butonuna tıklayınız</b>, sizi üç dakika içinde
				arayacağız.
			</Fragment>
		),
	},
	faq: {
		ru: "Частые вопросы",
		en: "Q&A",
		tr: "Sık sorulan sorular",
	},
	question1: {
		ru: "Какие транспортные средства вы можете застраховать?",
		en: "What vehicles are provided?",
		tr: "Hangi araçlarda tranfer sağlanıyor?",
	},
	answer1: {
		ru: "Мы готовы застраховать автомобили любой категории, будь то ваш личный автомобиль или авто принадлежащие юр. лицу.",
		en: "Although the transfer is carried out in «Mercedes Vito» vehicles, other means of transportation can be provided upon request.",
		tr: "Transfer «Mercedes Vito» araçlarında gerçekleştirilse de talep üzerine diğer ulaşım araçlar ile de sağlanabilir.",
	},
	question2: {
		ru: "Зачем нужно страховать жизнь",
		en: "Can I book a transfer with more than one stop?",
		tr: "Birden fazla durakla transfer rezervasyonu yapabilir miyim?",
	},
	answer2: {
		ru: "Чаще всего этого требует компания, на которую вы работаете. Большинство крупных компаний страхуют жизни своих работников.",
		en: "Yes, you can. This must be indicated in the comments when ordering through the website or reported during a call to the service center.",
		tr: "Evet, yapabilirsin. Bu, web sitesi üzerinden sipariş verirken yorumlarda belirtilmeli veya servis merkezine yapılan bir arama sırasında bildirilmelidir.",
	},
	question3: {
		ru: "Какие документы нужно собрать на первом этапе?",
		en: "Price per car or per person?",
		tr: "Fiyatlar neye göre belirleniyor? Yolcu sayısı fiyatı etkiliyor mu?",
	},
	answer3: {
		ru: "Insurance славится тем, что мы берем на себя бремя работы с документами. От вас требуется только удостоверение личности и ваше личное присутствие.",
		en: "Prices are per car and do not depend on the number of passengers.",
		tr: "Fiyatlar, seçtiğiniz rotaya göre belirleniyor ve yolcu sayısına bağlı değildir.",
	},
	question4: {
		ru: "Какие есть гарантии?",
		en: "What if my flight is delayed?",
		tr: "Uçuşum rötarlı olursa ne yapmalıyım?",
	},
	answer4: {
		ru: "В первую очередь ваши права защищает закон, но это не главное. Наша главная гарантия это милионы довольных клиентов.",
		en: (
			<span>
				As soon as you become aware that your flight is delayed, please{" "}
				<a href="https://wa.me/77472501797" target="_blank" rel="noreferrer">
					notify us via WhatsApp
				</a>{" "}
				or call <a href="tel:+77472501797">+77472501797</a>.
			</span>
		),
		tr: (
			<span>
				Uçağınızın rötar yaptığını öğrenir öğrenmez{" "}
				<a href="https://wa.me/77472501797" target="_blank" rel="noreferrer">
					bize WhatsApp üzerinden haber verin
				</a>{" "}
				veya <a href="tel:+77472501797">+77472501797</a> arayın.
			</span>
		),
	},
	smthWentWrong: {
		ru: "Упс! Что-то пошло не так. Попробуйте еще раз.",
		en: "Oops! Something went wrong. Try again.",
		tr: "Oops! Bir şeyler yanlış gitti. Tekrar deneyiniz.",
	},
	contacts: {
		ru: "Контакты",
		en: "Contacts",
		tr: "Bize ulaşın",
	},
	sitemap: {
		ru: "Карта сайта",
		en: "Site map",
		tr: "Si̇te hari̇tası",
	},
	payment: {
		ru: "Мы принимаем",
		en: "Payment systems",
		tr: "Ödeme sistemi",
	},
	siteLang: {
		ru: "Язык сайта",
		en: "Site language",
		tr: "Site dili",
	},
	completeOrder: {
		ru: "Завершите заказ",
		en: "Complete the order",
		tr: "Siparişinizi tamamlayınız",
	},
	passengers: {
		ru: "Пассажиров",
		en: "Passengers",
		tr: "Yolcu sayısı",
	},
	transportType: {
		ru: "Вид транспорта",
		en: "Type of transport",
		tr: "Araç",
	},
	otherOptions: {
		ru: "Прочие опции",
		en: "Other options",
		tr: "Diğer seçenekler",
	},
	wantMoreStops: {
		ru: "Я хочу сделать несколько остановок",
		en: "I want to make more than one stop",
		tr: "Çok duraklı yol",
	},
	nonstandardBaggage: {
		ru: "Я везу лыжи, велосипеды, детские коляски, большие чемоданы и пр.",
		en: "I carry skis, bicycles, strollers, large suitcases, etc.",
		tr: "Yanımda kayak, bisiklet, bebek arabası, büyük valiz vb. taşıyorum",
	},
	yourEmail: {
		ru: "Ваш email",
		en: "Your email",
		tr: "E-posta adresiniz",
	},
	total: {
		ru: "Итого",
		en: "Total",
		tr: "Toplam",
	},
	order: {
		ru: "Заказать",
		en: "Order",
		tr: "Siparişi tamamla",
	},
	yourOrderCopleted: {
		ru: "Ваш заказ успешно принят. Мы свяжемся с вами, чтобы подтвердить заказ. Спасибо, что выбрали «Insurance».",
		en: "Your order has been successfully accepted. We will contact you to confirm your order. Thank you for choosing Insurance.",
		tr: "Siparişiniz başarıyla kabul edildi. Siparişinizi onaylamak için sizinle iletişime geçeceğiz. Insurance'i tercih ettiğiniz için teşekkür ederiz.",
	},
	orderError: {
		ru: "Произошла ошибка во время отправки запроса. Попробуйте еще раз.",
		en: "An error occurred while sending the request. Try again.",
		tr: "İstek gönderilirken bir hata oluştu. Tekrar deneyin.",
	},
	wrongEmail: {
		ru: "Вы ввели неверный email",
		en: "You entered an invalid email",
		tr: "Geçersiz bir e-posta girildi",
	},
	wrongPhone: {
		ru: "Вы ввели неверный номер телефона",
		en: "You entered an invalid phone number",
		tr: "Geçersiz bir telefon numarası girildi",
	},
	wrongRoute: {
		ru: "Не удалось построить маршрут. Проверьте правильность введенных данных.",
		en: "Failed to build a route. Check the correctness of the entered data.",
		tr: "Rota oluşturulamadı. Girilen verilerin doğruluğunu kontrol ediniz.",
	},
	datePickerCancel: {
		ru: "ОТМЕНА",
		en: "CANCEL",
		tr: "İPTAL",
	},
	successCallbackOrder: {
		ru: "Мы получили вашу заявку. Наш оператор перезвонит вам в течение 10-ти минут.",
		en: "We have received your application. Our operator will call you back within 10 minutes.",
		tr: "Başvurunuzu aldık. Operatörümüz sizi 10 dakika içinde geri arayacaktır.",
	},
}

export default languages

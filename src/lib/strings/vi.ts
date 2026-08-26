import type { Strings } from "../i18n"

export const vi: Strings = {
  meta: {
    home: {
      title: "MapleKiosk — Giữ máy tính tiền. Thêm kiosk.",
      desc: "Kiosk tự đặt món cho quán trà sữa và quầy phục vụ nhanh ở Montréal và Bờ Nam. Không hợp đồng, 0% trên doanh thu.",
    },
    features: {
      title: "Ứng dụng — MapleKiosk",
      desc: "Kiosk, máy thu ngân, màn hình bếp, menu trên TV, giao hàng về một hàng chờ, khách hàng thân thiết.",
    },
    pricing: {
      title: "Bảng giá — MapleKiosk",
      desc: "Một mức giá cho mỗi ứng dụng, SaaS hoặc cài tại chỗ. Không hợp đồng, hủy bất cứ tháng nào, hoặc mua đứt.",
    },
    demo: {
      title: "Đặt lịch demo — MapleKiosk",
      desc: "15 phút. Menu của bạn, trên một kiosk thật.",
    },
    about: {
      title: "Về chúng tôi — MapleKiosk",
      desc: "Thành lập tại Longueuil. Chúng tôi tự xây và tự lắp đặt.",
    },
    salons: {
      title: "Tiệm nail & spa — MapleKiosk",
      desc: "Trợ lý điện thoại cho tiệm nail, spa và cửa hàng làm đẹp — trả lời, tư vấn và đặt lịch trong khi tay bạn đang bận.",
    },
    coffee: {
      title: "Cà phê & trà sữa — MapleKiosk",
      desc: "Kiosk tự đặt món cho quán cà phê, tiệm trà sữa và quầy thức ăn nhanh.",
    },
    restaurants: {
      title: "Nhà hàng & đồ ăn nhanh — MapleKiosk",
      desc: "Kiosk và màn hình bếp cho nhà hàng và quầy mang đi — giao hàng trong một hàng chờ.",
    },
    privacy: {
      title: "Quyền riêng tư — MapleKiosk",
      desc: "Chính sách quyền riêng tư.",
    },
    terms: {
      title: "Điều khoản — MapleKiosk",
      desc: "Điều khoản sử dụng.",
    },
    notFound: {
      title: "Không tìm thấy trang — MapleKiosk",
      desc: "Không tìm thấy trang.",
    },
  },

  nav: {
    features: "Ứng dụng",
    pricing: "Bảng giá",
    about: "Về chúng tôi",
    cta: "Đưa menu của tôi vào bản demo miễn phí",
  },

  hero: {
    title: "Một khách còn đang chọn trân châu — ba khách phía sau đã nhìn hàng chờ.",
    wedgeStrong: "Giữ máy tính tiền của bạn. Thêm kiosk.",
    wedgeRest:
      " Nếu kiosk không tự trả được tiền cho chính nó, chúng tôi rút điện — và bạn không nợ gì cả.",
    ctaSecondary: "15 phút, thứ Ba lúc 2 giờ chiều",
    ticket: {
      name: "Trà sữa khoai môn · L",
      num: "Số 042",
      rows: [
        { label: "Cỡ lớn", price: "$5.50" },
        { label: "50% đường · ít đá", price: "kèm theo" },
        { label: "Trân châu", price: "+$0.75" },
        { label: "Kem phô mai", price: "+$0.75" },
        { label: "Sữa yến mạch", price: "+$0.50" },
      ],
      totalLabel: "Tổng cộng",
      total: "$7.50",
      caption:
        "Khách tự đặt, gửi thẳng ra quầy pha đúng từng chi tiết — trong khi hàng chờ vẫn chạy.",
    },
  },

  router: {
    title: "Ba quầy hàng, ba buổi sáng khác nhau",
    sub: "Chọn quầy của bạn.",
    cta: "Đặt 15 phút",
    demoShop: "Tham quan cửa hàng demo",
    doors: [
      {
        label: "Quán trà & cà phê",
        hook: "“Nửa đường, ít đá, thêm trân châu” — và hàng chờ vẫn chạy.",
        body: "Kiosk nhận đơn tùy chỉnh và gửi ra quầy pha đúng từng lựa chọn.",
      },
      {
        label: "Quầy bán mang đi",
        hook: "Điện thoại reo, tablet kêu, hàng chờ dài thêm — mà bạn chỉ có hai tay.",
        body: "Kiosk, quầy và giao hàng đổ về một hàng chờ chuẩn bị duy nhất.",
      },
      {
        label: "Nhà hàng ngồi tại chỗ",
        hook: "Tiếng bíp DoorDash lại cắt ngang giờ phục vụ. Lần nữa.",
        body: "Uber Eats và DoorDash hiện thẳng lên màn hình bếp — không còn dàn tablet.",
      },
    ],
  },

  diagram: {
    title: "Tiền của bạn đi đâu",
    sub: "Họ ngồi trên tiền của bạn. Chúng tôi đứng bên cạnh.",
    othersTag: "HỌ — SQUARE · TOAST · CLOVER",
    usTag: "CHÚNG TÔI — MAPLEKIOSK",
    you: "Bạn",
    bank: "Ngân hàng",
    othersBox: "Nền tảng của họ: phần mềm + thiết bị + tiền của bạn — một khối duy nhất",
    othersNote:
      "Mỗi giao dịch đều đi qua họ: ~2.5% trên mỗi thẻ tín dụng, phần chênh giấu trong tỷ lệ phí. Muốn rời đi = mua thiết bị mới, mất dữ liệu.",
    acqBox: "Acquirer của bạn — mức phí bạn tự thương lượng",
    usBox: "MapleKiosk — chỉ phần mềm · 0% trên doanh thu",
    usNote:
      "Hợp đồng thanh toán là chuyện giữa bạn và acquirer của bạn. Chúng tôi không bao giờ chạm vào tiền của bạn — và không thu hoa hồng.",
  },

  teach: {
    pre: "Phần mềm tính tiền “miễn phí” không tồn tại. Giá nằm trong tỷ lệ phí — khoảng 2.5% trên mỗi đơn hàng, mãi mãi. Còn của chúng tôi in ngay đây: ",
    zero: "0%",
    post: ".",
  },

  calc: {
    title: "Phí thanh toán thật sự tốn của bạn bao nhiêu",
    sub: "Nhập số liệu của bạn. Chúng tôi so sánh — trung thực, kể cả khi kết quả không có lợi cho chúng tôi.",
    volume: "Doanh thu quẹt thẻ mỗi tháng",
    debit: "Tỷ lệ thẻ ghi nợ Interac",
    ticket: "Hóa đơn trung bình",
    resultTag: "PHÍ ƯỚC TÍNH MỖI THÁNG",
    square: "Square",
    clover: "Clover",
    acq: "Acquirer riêng của bạn",
    honestTitle: "Ý kiến thật lòng:",
    honestBody:
      " với doanh thu của bạn, mức phí cố định của Square có lẽ là lựa chọn tốt nhất — phí cố định của tài khoản acquirer sẽ ăn hết phần tiết kiệm. Gặp trực tiếp chúng tôi cũng nói vậy.",
    saveTitle: "Tiết kiệm ước tính:",
    saveBody:
      " mỗi tháng với hợp đồng riêng của bạn — vì chúng tôi không thu hoa hồng trên thanh toán của bạn.",
    disclaimer:
      "Phí niêm yết của Square (2.5% thẻ tín dụng; 0.75% + 7¢ thẻ ghi nợ). Clover không niêm yết phí tại Canada — chúng tôi ước tính theo mức phí tại quầy ở Mỹ của họ (2.3% + 10¢). “Acquirer riêng của bạn” = một hợp đồng interchange-plus điển hình cho cửa hàng nhỏ (1.3–1.8% thẻ tín dụng; 8¢ mỗi giao dịch ghi nợ; đã gồm khoảng $60/tháng phí cố định). Chỉ là ước tính — mang theo sao kê để tính con số thật.",
    cta: "Mang theo một bản sao kê — chúng tôi kiểm tra những con số này cho thật",
  },

  lineCost: {
    title: "Hàng chờ đang tốn của bạn bao nhiêu?",
    sub: "Khách nhìn hàng chờ rồi bỏ đi không hiện trong bất kỳ báo cáo nào. Hãy đặt một con số cho họ.",
    walkouts: "Số khách bỏ đi mỗi ngày",
    days: "Số ngày mở cửa mỗi tháng",
    resultTag: "DOANH THU MẤT ƯỚC TÍNH MỖI THÁNG",
    payoff:
      "Nếu kiosk giữ lại được dù chỉ một phần số đơn đó trong khi hàng chờ vẫn chạy — cuối tháng sẽ khác đi bao nhiêu?",
    honest:
      "Nếu con số này nhỏ, kiosk sẽ không tự trả được tiền cho chính nó — và chúng tôi cũng sẽ nói thẳng với bạn như vậy.",
    cta: "Mang những con số này theo — chúng tôi sẽ kiểm tra thật",
  },

  chips: {
    title: "Những điều khoản có thể viết bằng chữ to",
    items: [
      "Không hợp đồng",
      "Không cho thuê thiết bị",
      "Không ép gói thanh toán",
      "Hủy bất cứ tháng nào",
      "Mua đứt, nếu bạn muốn",
    ],
  },

  finalCta: {
    title: "Thành lập tại Longueuil. Không hợp đồng. Chúng tôi tự đến lắp đặt.",
    sub: "Hai tuần dùng thử ngay tại quán. Nếu kiosk không tự trả được tiền cho chính nó, chúng tôi rút điện — và bạn không nợ gì cả.",
  },

  footer: {
    tagline:
      "Một bộ ứng dụng doanh nghiệp và dịch vụ AI vừa túi tiền, được xây dựng cẩn thận tại Canada cho những người giữ cho doanh nghiệp nhỏ vận hành.",
    product: "Sản phẩm",
    legal: "Pháp lý",
    demo: "Đặt lịch demo",
    industries: "Ngành nghề",
    nails: "Tiệm nail & làm đẹp",
    restaurants: "Nhà hàng & đồ ăn nhanh",
    coffee: "Cà phê & Trà sữa",
    rights: "Đã đăng ký bản quyền.",
    madeIn: "Made in Canada 🍁",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
  },

  coffee: {
    kicker: "Chúng tôi hiểu ngôn ngữ của quầy",
    title: "Thực đơn của bạn không phải một nút bấm. Máy tính tiền của bạn cũng vậy.",
    intro:
      "Máy tính tiền thông thường được làm cho một giá, một chạm. Một đơn trà sữa hay cà phê là cả chồng lựa chọn — kích cỡ, đường, đá, sữa, topping — dồn dập đến trong giờ cao điểm. Kiosk sinh ra đúng cho điều đó.",
    quotes: [
      {
        q: "“50% đường, ít đá, thêm trân châu?”",
        body: "Các tùy chọn phản ánh đúng thực đơn thật của bạn — mức đường và mức đá, kích cỡ, nóng hay lạnh, đổi loại sữa và topping — tự động tính giá và gửi thẳng ra quầy pha chế.",
      },
      {
        q: "“Đơn tiếp theo!”",
        body: "Đơn bay tới màn hình quầy pha chế và bếp theo thứ tự, để đồ uống và món ăn ra đúng trình tự ngay cả khi khách xếp hàng tới tận cửa.",
      },
      {
        q: "“Mua 9, tặng ly thứ 10?”",
        body: "Thẻ đóng dấu điện tử, điểm thưởng và khuyến mãi mà khách quen thật sự dùng — không lo mất thẻ, không phải tính toán ở quầy tính tiền.",
      },
    ],
  },

  restaurants: {
    title: "Tiếng bíp DoorDash lại cắt ngang giờ phục vụ. Lần nữa.",
    sub: "Uber Eats và DoorDash hiện thẳng lên màn hình bếp — không còn dàn tablet.",
    bandTitle: "Giờ cao điểm hay tối vắng khách — bếp chỉ đọc một hàng chờ.",
    quotes: [
      {
        q: "Điện thoại reo, tablet kêu, hàng chờ dài thêm — mà bạn chỉ có hai tay.",
        body: "Kiosk, quầy và giao hàng đổ về một hàng chờ chuẩn bị duy nhất.",
      },
      {
        q: "“Hết món cá hồi.”",
        body: "Đánh dấu một món hết một lần và nó lập tức chuyển xám trên kiosk và thực đơn TV của bạn.",
      },
      {
        q: "Điện thoại reo giữa giờ phục vụ — bàn cho bốn người, tối thứ Bảy.",
        body: "Trợ lý trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh, giải đáp thắc mắc và đặt bàn — trong khi bạn vẫn phục vụ.",
      },
    ],
  },

  features: {
    title: "Mọi thứ quầy hàng cần, ở cùng một nơi.",
    sub: "Dành cho chủ quán đã hiểu vấn đề. Đây là câu trả lời.",
    screenshot: "[ẢNH CHỤP MÀN HÌNH]",
    blocks: [
      {
        title: "Kiosk",
        body: "Tùy chỉnh đầy đủ — đường, đá, cỡ ly, loại sữa, topping. Mỗi lựa chọn được tính đúng giá và gửi ra quầy pha đúng như khách đặt. Phía khách có tiếng Anh, Pháp, Việt và Nga.",
      },
      {
        title: "Máy thu ngân",
        body: "Tính tiền nhanh, món yêu thích, tiền tip trên màn hình.",
      },
      {
        title: "Màn hình bếp (KDS)",
        body: "Đơn hàng theo thứ tự — kiosk, quầy và giao hàng trong một hàng chờ duy nhất.",
      },
      {
        title: "Giao hàng, một hàng chờ",
        body: "Uber Eats và DoorDash hiện trên cùng màn hình với quầy. Không còn dàn tablet.",
      },
      {
        title: "Menu trên TV",
        body: "Đồng bộ với menu; hết món chỉ cần một chạm.",
      },
      {
        title: "Hồ sơ khách & khách hàng thân thiết",
        body: "Tem điện tử, điểm thưởng, và khách quen quay lại.",
      },
      {
        title: "Kết nối với máy tính tiền của bạn",
        body: "Tích hợp Clover hiện nay — máy của bạn vẫn là máy của bạn. [KIỂM TRA danh sách tích hợp trước khi đăng]",
      },
      {
        title: "Tại quán hoặc trên mây",
        body: "Đám mây, hoặc cài đặt ngay tại quán. Mua đứt nếu bạn muốn.",
      },
    ],
    timelineTitle: "Một buổi sáng ở quầy",
    timeline: [
      {
        time: "7:00",
        text: "Mở cửa. TV và kiosk sáng lên với menu hôm nay.",
      },
      {
        time: "8:15",
        text: "Giờ cao điểm. Kiosk nhận đơn tùy chỉnh, quầy vẫn thu tiền, quầy pha đọc một hàng chờ duy nhất.",
      },
      {
        time: "11:30",
        text: "Đơn đặt trước và giao hàng đổ về cùng hàng chờ với quầy.",
      },
      {
        time: "14:00",
        text: "Giờ vắng. Đánh dấu hết món trên mọi màn hình, một chạm.",
      },
      {
        time: "20:00",
        text: "Đóng cửa. Số liệu cả ngày trên một màn hình.",
      },
    ],
  },

  pricing: {
    title: "Một mức giá cho mỗi ứng dụng. SaaS hoặc cài đặt tại chỗ.",
    sub: "Mọi ứng dụng MapleKiosk đều có hai lựa chọn — chúng tôi lưu trữ (SaaS, tính phí hằng tháng) hoặc cài trên máy chủ của bạn (tại chỗ, mua bản quyền một lần). Chọn theo từng ứng dụng và kết hợp tuỳ ý.",
    per: "/tháng",
    apps: [
      { name: "MapleCoffee", price: "$39", tag: "" },
      { name: "MapleRES", price: "$49", tag: "" },
      { name: "MapleSPA", price: "$44", tag: "Ứng dụng chủ lực" },
    ],
    note: "Giá tính bằng USD, cho mỗi ứng dụng, chưa thuế. Dịch vụ tích hợp AI được báo giá riêng. Cần nhiều ứng dụng hoặc bản dựng riêng? Trao đổi với bộ phận bán hàng để có gói ưu đãi.",
    buyTitle: "Hoặc mua đứt",
    buyBody: "Trả một lần, lắp đặt tại chỗ, là của bạn mãi mãi.",
    buyCta: "Liên hệ",
    faqTitle: "Hỏi thẳng, trả lời thẳng",
    faq: [
      {
        q: "Nếu tôi hủy thì sao?",
        a: "Hủy bất cứ tháng nào, không phạt. Menu và dữ liệu đi theo bạn.",
      },
      {
        q: "Còn thiết bị?",
        a: "Không bao giờ cho thuê dài hạn. Mua đứt kiosk, hoặc dùng kèm gói thuê bao.",
      },
      {
        q: "Thanh toán của tôi có đi qua các bạn không?",
        a: "Không. Không bao giờ. Hợp đồng thanh toán là giữa bạn và acquirer của bạn — xem máy tính phí.",
      },
      {
        q: "Lắp đặt mất bao lâu?",
        a: "Chúng tôi nạp menu trước khi đến và lắp đặt tại chỗ, tránh giờ bán hàng của bạn.",
      },
      {
        q: "Có chạy với máy tính tiền của tôi không?",
        a: "Tích hợp Clover hiện nay; nếu không, kiosk chạy song song với máy của bạn, không thay thế nó. [KIỂM TRA danh sách tích hợp]",
      },
      {
        q: "Dùng thử hai tuần là sao?",
        a: "Hai tuần ngay tại quán. Nếu kiosk không tự trả được tiền cho chính nó, chúng tôi rút điện — và bạn không nợ gì cả.",
      },
    ],
  },

  demo: {
    title: "15 phút. Menu của bạn, trên một kiosk thật.",
    sub: "Chúng tôi nạp menu trước khi đến — bạn dùng thử, bạn quyết định. Thứ Ba hoặc thứ Tư sau giờ cao điểm là đẹp nhất.",
    form: {
      name: "Họ tên",
      business: "Tên quán",
      area: "Khu vực hoặc thành phố",
      phone: "Số điện thoại (nhắn tin cũng được)",
      slot: "Khung giờ mong muốn",
      submit: "Đặt 15 phút của tôi",
    },
    orText: "Hoặc nhắn tin ",
    orEmail: "Hoặc viết cho ",
    photo: "[ẢNH — người sáng lập tại một quầy hàng]",
  },

  about: {
    title: "Xây tại Longueuil. Lắp đặt bởi chính người viết ra nó.",
    paras: [
      "MapleKiosk được xây tại Longueuil bởi Minh — một lập trình viên tự viết phần mềm, tự nạp menu của bạn và tự đến lắp kiosk.",
      "Sản phẩm đang chạy trong các quán trà sữa ở Mỹ. Các điểm lắp đặt đầu tiên trong vùng đang đến — vì vậy demo miễn phí và dùng thử không tốn gì.",
      "Các điều khoản — không hợp đồng, không cho thuê, không ép gói thanh toán — tồn tại vì một lý do: chúng tôi muốn bạn ở lại vì bạn chọn ở lại.",
    ],
    photo: "[ẢNH]",
  },

  salons: {
    kicker: "Cho tiệm nail, spa và cửa hàng làm đẹp",
    title: "Điện thoại reo. Tay bạn đang trong lớp bột acrylic.",
    sub: "Một trợ lý trả lời mọi cuộc gọi, bằng tiếng Pháp hoặc tiếng Anh, tư vấn dịch vụ cho khách và đặt lịch. Lịch hẹn hiện thẳng vào sổ của bạn. Thợ của bạn không phải dừng tay.",
    bandTitle: "Tay bạn vẫn ở với khách. Trợ lý lo phần nghe điện thoại.",
    quotes: [
      {
        q: "“Có chỗ cho hai người chiều thứ Bảy không?”",
        body: "Trợ lý kiểm tra lịch, trả lời như người thật và đặt chỗ — lịch hẹn hiện ngay trong sổ của bạn.",
      },
      {
        q: "Không ai bắt máy — khách đặt luôn tiệm kế bên trên Google.",
        body: "Mọi cuộc gọi đều được trả lời, bằng tiếng Pháp hoặc tiếng Anh — dù bạn đang làm móng, đang chăm sóc da hay đang đông khách.",
      },
      {
        q: "“Dặm gel giá bao nhiêu?”",
        body: "Nó biết dịch vụ và bảng giá của bạn, trả lời rõ ràng — rồi mời khách đặt lịch.",
      },
    ],
    recording: "[GHI ÂM — một cuộc gọi thật 30 giây, sẽ sản xuất]",
    disclosure:
      "Trợ lý là tự động và nói rõ điều đó ở đầu mỗi cuộc gọi. Việc xử lý cuộc gọi đang được rà soát theo luật riêng tư Québec (Luật 25) trước khi ra mắt.",
  },

  notFound: {
    title: "Trang này không có trong menu.",
    text: "Quay về trang chủ — hoặc hay hơn, đặt 15 phút demo.",
    back: "Về trang chủ",
  },
}

export const FourthQuestionAnswer = () => {
	return (
		<>
			<div className="">
				Để chuẩn bị meeting hiệu quả nhất, đội ngũ phát triển sản phẩm chuẩn bị
				một vài tips sau dành cho bạn:
			</div>
			<ol className="list-disc list-inside ml-2">
				<li>
					Trước meeting:
					<ol className="list-decimal list-outside ml-8">
						<li>
							Bạn hãy tìm hiểu kĩ về mentor của mình qua Linkedin cá nhân hoặc
							các website của họ nhé. Khi bạn dành một chút thời gian tìm hiểu
							kĩ về mentor, bạn sẽ biết được thế mạnh của mentor là gì và đặt
							được những câu hỏi trúng trọng tâm hơn.
						</li>
						<li>
							Liệt kê điểm mạnh, điểm yếu của bản thân để mentor có thể hiểu rõ
							bản thân bạn hơn trong buổi meeting
						</li>
						<li>Có một danh sách cụ thể các câu hỏi mà bạn muốn hỏi</li>
					</ol>
				</li>
			</ol>
			<ol className="list-disc list-inside ml-2">
				<li>
					Trong meeting:
					<ol className="list-decimal list-outside ml-8">
						<li>
							Giới thiệu bản thân, điểm mạnh và điểm yếu của bạn cho mentor một
							cách chi tiết để họ có thể đưa ra lời khuyên và hướng dẫn tốt nhất
							dành cho bạn! gì và đặt được những câu hỏi trúng trọng tâm hơn.
						</li>
						<li>Có một tâm thế tự tin và thoải mái nhé! 🤩</li>
					</ol>
				</li>
			</ol>
			<ol className="list-disc list-inside ml-2">
				<li>
					Sau meeting:
					<ol className="list-decimal list-outside ml-8">
						<li>
							Bạn đừng quên review mentor trên nền tảng nhé! Review của bạn là
							feedback giúp mentor hiểu và đánh giá mức độ hiệu quả trong quá
							trình đồng hành cùng các bạn. Review của bạn cũng sẽ giúp các bạn
							mentee khác dựa vào để lựa chọn mentor cho họ!
						</li>
					</ol>
				</li>
			</ol>
		</>
	)
}

export const FAQs = [
	{
		q: 'Mình có phải trả phí để sử dụng nền tảng này không?',
		a: 'Nền tảng hoàn toàn miễn phí! Bạn sẽ không bao giờ phải trả phí để sử dụng nhé!',
	},
	{
		q: 'Sau khi đăng ký tài khoản, mình không nhận được email xác thực thì phải làm sao?',
		a: 'Ngoài hòm thư chính, các bạn vui lòng kiểm tra hòm thư spam và promotion nữa nhé. Nếu các bạn vẫn không nhận được email xác thực tài khoản, các bạn vui lòng gửi email tới địa chỉ nguyetque.shecodes@gmail.com',
	},
	{
		q: 'Mình có thể tự schedule lịch với mentor mà không phải thông qua nền tảng hay không?',
		a: `Khi book mentor qua nền tảng, bạn sẽ có cơ hội được gặp gỡ với nhiều
      mentor khác nhau để tìm ra mentor phù hợp với nhu cầu của bạn nhất. Bạn sẽ
      không phải lo ngại về việc phải dành thời gian để nhắn tin làm quen với
      mentor hay sắp xếp tìm khung thời gian phù hợp để bạn và mentor có thể gặp
      nhau.\nVì vậy, mặc dù bạn hoàn toàn có thể tự schedule lịch với mentor
      ở bên ngoài, việc đặt lịch với mentor qua nền tảng sẽ giúp bạn tiết kiệm
      được nhiều thời gian, công sức hơn và cũng tiện lợi hơn cho mentor của bạn
      rất nhiều. Đôi khi họ có thể quá bận mà quên trả lời tin nhắn của bạn phải
      không nào!`,
	},
	{
		q: 'Làm sao để mình có thể chuẩn bị cho buổi meeting một cách hiệu quả nhất?',
		a: FourthQuestionAnswer(),
	},
	{
		q: 'Mentor của mình không tham gia buổi meeting, mình nên làm gì tiếp theo?',
		a: "Bạn vui lòng gửi email thông báo về địa chỉ handinh.shecodes@gmail.com nhé. Ai cũng có những tình huống bất ngờ xảy ra phải không nào. Vì vậy, sau khi gửi email thì bạn hãy đặt lại lịch với mentor đó hoặc mentor khác nhé! Tuy nhiên, đội ngũ phát triển sản phẩm mentorship có quy định về 'no-show'. Mentor vắng mặt 2 lần sẽ nhận được email thông báo từ đội ngũ phát triển sản phẩm và tạm thời bị khoá tài khoản.",
	},
	{
		q: 'Nếu mình không thể tham gia meeting đã hẹn trước với mentor, mình nên làm gì? ',
		a: "Bạn vui lòng huỷ lịch meeting ít nhất trước 24h đồng hồ và kèm theo chú thích lý do nhé! Đội ngũ phát triển sản phẩm mentorship có quy định về 'no-show'. Đối với mentee không tham gia 2 buổi meeting mà không huỷ lịch trước đó, tài khoản của các bạn sẽ bị khoá tạm thời. Trong trường hợp bạn có lý do chính đáng và muốn mở lại tài khoản, bạn vui lòng email về địa chỉ handinh.shecodes@gmail.com nhé.",
	},
]

export const INTERNAL_URI = {
	HOME: '/',
	SEARCH: '/search',
	MENTOR_PROFILE: (id: string) => `/mentors/${id}` as const,
} as const

export const ENDPOINT = {
	REGISTER: '/account/register',
	LOGIN: '/account/login',
	LOGOUT: '/account/logout',

	VERIFY_EMAIL: '/account/verify-email/',
	CHANGE_PASSWORD: '/account/change-password',
	RESET_PASSWORD: '/account/reset-password',

	GET_CURRENT_USER: '/me',
	UPDATE_USER_AVATAR: '/me',
	UPDATE_USER_PROFILE: '/me',
	GET_ALL_MENTOR: '/mentors',
	GET_MENTOR_BY_ID: '/mentors/',
	SEARCH_MENTOR: '/search',

	REFRESH_ACCESS_TOKEN: '/auth/refresh-token',
} as const

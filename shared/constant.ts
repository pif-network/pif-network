import Avatar from '~/assets/MentorAvatar.jpg';
import { FourthQuestionAnswer } from '~/components/ui/FAQs/FourthQuestionAnswer';
import { User } from '~/lib/types/user';

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
];

export const INTERNAL_URI = {
  HOME: '/',
  LOGIN: '/login',
  SEARCH: '/search',

  REGISTER: '/user/create-account',
  COMPLETE_PROFILE: '/user/complete-profile',
  FORGOT_PASSWORD: '/user/forgot-password',
  CHANGE_PASSWORD: '/user/change-password',
  SUCCESSFULLY_REGISTERED: '/user/successfully-registered',
  VERIFY_EMAIL: '/user/verify-email',

  MENTOR_PROFILE: (id: string) => `/mentors/${id}` as const,
} as const;

export const ENDPOINT = {
  REGISTER: '/users/register',
  LOGIN: '/users/auth',

  VERIFY_EMAIL: '/account/verify-email/',
  CHANGE_PASSWORD: '/users/auth/change-password',
  RESET_PASSWORD: '/users/auth/reset-password',

  GET_CURRENT_USER: '/users/me',
  UPDATE_USER_AVATAR: '/me',
  UPDATE_USER_PROFILE: '/me',
  GET_ALL_MENTOR: '/mentors/search',
  GET_MENTOR_BY_ID: '/mentors/',
  SEARCH_MENTOR: '/search',

  REFRESH_ACCESS_TOKEN: '/users/auth/refresh-token',
} as const;

export const RANDOM_MENTORS: User<'Mentor'>[] = new Array(4).fill({
  id: 1,
  userId: 1,
  avatar: '/default_avatar.png',
  email: 'giangpham.shecodes@gmail.com',
  name: 'Uncle Ben',
  phone: '0123456789',
  school: 'FPT University',
  exp: {
    title: 'Software Engineer',
    workspace: 'Contemi Vietnam',
  },
  birthday: new Date(2000, 1, 1),
  role: 'Mentor',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isActive: true,
  isConfirmed: true,
  memberSince: new Date(),
  location: 'Vietnam',
  createdAt: new Date(),
  updatedAt: new Date(),
  linkedin: 'https://www.linkedin.com/company/shecodesvietnam/',
  github: 'https://github.com/shecodesvietnam',
  scopes: ['Software Development'],
  fields: ['IT'],
  offers: ['Định hướng nghề nghiệp'],
});

export const USER_ROLE = {
  MENTOR: 'Mentor',
  MENTEE: 'Mentee',
} as const;

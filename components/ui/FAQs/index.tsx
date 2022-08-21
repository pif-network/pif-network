import { FAQs } from '~/shared/constant';
import FAQAccordionItem from './FAQAccordionItem';

const FAQSection = () => {
  return (
    <section className="max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-primary-900 font-lora font-semi-bold word-[-0.6rem] text-title-sm">
          Những câu hỏi thường gặp
        </h1>
        <p className="max-w-lg mx-auto text-gray-600 text-body-md">
          SheCodes trả lời những câu hỏi mà có thể bạn sẽ thắc mắc.
        </p>
      </div>

      <div className="mt-14 max-w-2xl mx-auto">
        {FAQs.map((item, idx) => (
          <FAQAccordionItem key={idx} idx={idx} FAQ={item} />
        ))}
      </div>

      <div className="space-y-1 mt-5 text-center">
        <h3 className="text-primary-900 font-lora font-semi-bold word-[-0.4rem] text-body">
          VẪN CÒN CÂU HỎI?{' '}
        </h3>
        <p className="max-w-md mx-auto text-gray-600 text-body-md">
          Nếu bạn không thể tìm thấy câu trả lời mong muốn ở trên, xin hãy xem
          thêm tại đây hoặc liên hệ với chúng tôi.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;

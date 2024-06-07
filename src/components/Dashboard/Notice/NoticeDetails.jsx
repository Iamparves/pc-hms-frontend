import { getAllNotice } from "@/db/notice";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const NoticeDetails = () => {
  const { noticeId } = useParams();

  const noticeQuery = useQuery({
    queryKey: ["notice", noticeId],
    queryFn: () => getAllNotice(`?_id=${noticeId}`),
    enabled: !!noticeId,
  });

  const notice = noticeQuery.data?.data?.notices?.[0] || {};

  return (
    <div>
      <div className="flex items-start justify-between gap-10">
        <div className="">
          <h3 className="text-lg font-semibold">{notice.title}</h3>
          <p className="text-gray-500">
            {format(new Date(notice.startDate), "dd MMM yyyy")}
          </p>
        </div>
        <p
          className={cn(
            "mt-1.5 rounded-full px-2.5 py-1 text-sm font-medium",
            notice.status === "Active"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white",
          )}
        >
          {notice.status}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
          {notice.content}
        </p>
      </div>
    </div>
  );
};

export default NoticeDetails;

import React from 'react';
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
interface notificationprops {
  message: string;
  title: string;
  type: string;
}
function notification({ message, title, type }: notificationprops) {
  return (
    <div className="border rounded-md border-slate-400 p-3 flex w-1/3 bg-green-100">
      <div className="pr-3">
        {type === 'success' && (
          <CheckCircleIcon className="size-6 text-blue-500" />
        )}
        {type === 'failure' && (
          <XCircleIcon className="size-6 text-blue-500" />
        )}
        {type === 'default' && (
          <InformationCircleIcon className="size-6 text-blue-500" />
        )}
      </div>
      <div>
        <h4 className="text-xl  ">{title}</h4>
        <p className=" ">{message}</p>
      </div>
    </div>
  );
}

export default notification;

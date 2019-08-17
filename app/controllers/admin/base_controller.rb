class Admin::BaseController < ApplicationController
  before_action :authenticate_user!
  before_action :ensure_admin!

  def ensure_admin!
    unless current_user.has_role?(:admin)
      # raise Pundit::NotAuthorizedError, "not allowed to view admin routes"
      # flash[:alert] = "You are not authorized to perform this action."
      redirect_to(request.referrer || root_path)
    end
  end
end

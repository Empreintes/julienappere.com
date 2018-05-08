module Jekyll
  module EmailObfuscation
    module EmailObfuscationFilter


      def obfuscation(email)
        email.to_s.chars.inject(String.new) do |result, char|
          if char =~ /\p{Alnum}/
            char.bytes.inject(result) do |result, byte|
              result << '%%%02X' % byte
            end
          else
            result << char
          end
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::EmailObfuscation::EmailObfuscationFilter)